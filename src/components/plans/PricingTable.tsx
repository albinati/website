'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiCheck, FiX } from 'react-icons/fi';

type PlanFeature = {
  title: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  mostPopular?: boolean;
  urgencyLevel: string;
  buttonText: string;
  color: string;
};

export default function PricingTable() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = [
    {
      id: 'calm',
      name: 'Calm',
      price: billingPeriod === 'monthly' ? 49 : 470,
      description: 'Para médicos que já estão empregados e buscam complementar sua renda com plantões extras.',
      urgencyLevel: 'Baixa',
      buttonText: 'Começar com Calm',
      color: 'blue',
      features: [
        { title: 'Até 5 consultas por dia', included: true },
        { title: 'Resumo diário às 08h', included: true },
        { title: 'Filtros básicos', included: true },
        { title: 'Notificações por e-mail', included: true },
        { title: 'Suporte por e-mail', included: true },
        { title: 'Acesso a plantões até 7 dias', included: true },
        { title: 'Alertas em tempo real', included: false },
        { title: 'Plantões exclusivos', included: false },
        { title: 'Suporte prioritário', included: false },
      ],
    },
    {
      id: 'active',
      name: 'Active',
      price: billingPeriod === 'monthly' ? 99 : 950,
      description: 'Para médicos que precisam equilibrar vários plantões semanais com alta eficiência.',
      urgencyLevel: 'Média',
      buttonText: 'Escolher Active',
      color: 'indigo',
      mostPopular: true,
      features: [
        { title: 'Até 15 consultas por dia', included: true },
        { title: 'Resumo 2x ao dia (06h e 18h)', included: true },
        { title: 'Filtros avançados', included: true },
        { title: 'Notificações por e-mail e SMS', included: true },
        { title: 'Suporte por e-mail e WhatsApp', included: true },
        { title: 'Acesso a plantões até 30 dias', included: true },
        { title: 'Alertas em tempo real', included: true },
        { title: 'Plantões exclusivos', included: false },
        { title: 'Suporte prioritário', included: false },
      ],
    },
    {
      id: 'frenetic',
      name: 'Frenetic',
      price: billingPeriod === 'monthly' ? 149 : 1430,
      description: 'Para médicos que precisam encontrar plantões imediatamente e com máxima prioridade.',
      urgencyLevel: 'Alta',
      buttonText: 'Escolher Frenetic',
      color: 'purple',
      features: [
        { title: 'Consultas ilimitadas', included: true },
        { title: 'Alertas em tempo real', included: true },
        { title: 'Filtros premium', included: true },
        { title: 'Notificações instantâneas no app', included: true },
        { title: 'Suporte 24/7 por WhatsApp', included: true },
        { title: 'Acesso a todos os plantões', included: true },
        { title: 'Plantões exclusivos', included: true },
        { title: 'Suporte prioritário', included: true },
        { title: 'Acesso antecipado a novas features', included: true },
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Escolha o plano ideal para sua urgência</h2>
          <p className="text-gray-600">
            Nós entendemos que cada médico possui uma urgência diferente na busca por plantões. 
            Por isso, criamos planos que se adaptam ao seu momento profissional.
          </p>

          {/* Alternador de período */}
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`py-2 px-4 rounded-md text-sm font-medium ${
                billingPeriod === 'monthly'
                  ? 'bg-white shadow-sm text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`py-2 px-4 rounded-md text-sm font-medium ${
                billingPeriod === 'yearly'
                  ? 'bg-white shadow-sm text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Anual <span className="text-xs text-green-600 font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.mostPopular ? 'ring-2 ring-secondary relative' : ''
              }`}
            >
              {plan.mostPopular && (
                <div className="bg-secondary text-center py-2 text-sm font-medium text-black">
                  Mais escolhido
                </div>
              )}
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <span className={`badge bg-${plan.color}-100 text-${plan.color}-800 px-3`}>
                      Urgência {plan.urgencyLevel}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">R$ {plan.price}</span>
                    <span className="text-gray-600">/{billingPeriod === 'monthly' ? 'mês' : 'ano'}</span>
                  </div>
                </div>

                <Link
                  href={`/registro?plan=${plan.id}`}
                  className={`btn w-full text-center btn-primary mb-6`}
                >
                  {plan.buttonText}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.included ? (
                        <FiCheck className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}
                      >
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            Todos os planos incluem 7 dias de teste grátis. Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
} 