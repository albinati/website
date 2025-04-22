import { NextResponse } from 'next/server';
import { Stripe } from 'stripe';

import { prisma } from '@/lib/prisma';

// Inicializa o cliente Stripe com a chave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

// Função para verificar a assinatura do webhook do Stripe
const verifyStripeSignature = async (req: Request) => {
  const signature = req.headers.get('stripe-signature');
  if (!signature) return false;

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  if (!webhookSecret) {
    console.error('Faltando STRIPE_WEBHOOK_SECRET no ambiente');
    return false;
  }

  try {
    const text = await req.text();
    const event = stripe.webhooks.constructEvent(text, signature, webhookSecret);
    return event;
  } catch (err) {
    console.error(`Erro na verificação da assinatura do webhook: ${err}`);
    return false;
  }
};

export async function POST(req: Request) {
  try {
    const event = await verifyStripeSignature(req);
    if (!event) {
      return NextResponse.json({ error: 'Assinatura inválida' }, { status: 400 });
    }

    // Processa o evento com base no tipo
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        if (!session.customer || !session.subscription) break;

        // Atualiza a assinatura do usuário no banco de dados
        await prisma.subscription.update({
          where: {
            stripeCustomerId: session.customer as string,
          },
          data: {
            stripeSubscriptionId: session.subscription as string,
            status: 'ACTIVE',
            currentPeriodStart: new Date(),
            currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // +30 dias
          },
        });
        break;

      case 'invoice.payment_succeeded':
        const invoice = event.data.object as Stripe.Invoice;
        if (!invoice.customer || !invoice.subscription) break;

        // Atualiza o período da assinatura do usuário
        await prisma.subscription.update({
          where: {
            stripeSubscriptionId: invoice.subscription as string,
          },
          data: {
            status: 'ACTIVE',
            currentPeriodStart: new Date(invoice.period_start * 1000),
            currentPeriodEnd: new Date(invoice.period_end * 1000),
          },
        });
        break;

      case 'customer.subscription.updated':
        const updatedSubscription = event.data.object as Stripe.Subscription;
        if (!updatedSubscription.customer) break;

        // Atualiza o status da assinatura (ativo, inadimplente, etc.)
        await prisma.subscription.update({
          where: {
            stripeCustomerId: updatedSubscription.customer as string,
          },
          data: {
            status: updatedSubscription.status === 'active' 
              ? 'ACTIVE' 
              : updatedSubscription.status === 'past_due' 
                ? 'PAST_DUE' 
                : 'CANCELED',
          },
        });
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription;
        if (!deletedSubscription.customer) break;

        // Marca a assinatura como cancelada
        await prisma.subscription.update({
          where: {
            stripeCustomerId: deletedSubscription.customer as string,
          },
          data: {
            status: 'CANCELED',
          },
        });
        break;

      default:
        console.log(`Evento não processado: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar webhook' },
      { status: 500 }
    );
  }
} 