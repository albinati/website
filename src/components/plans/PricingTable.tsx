'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiCheck, FiX, FiClock, FiSmartphone, FiShield, FiFilter, FiMail, FiAlertCircle } from 'react-icons/fi';

type PlanFeature = {
  title: string;
  included: boolean;
  highlighted?: boolean;
};

type PlanBenefit = {
  icon: React.ReactNode;
  title: string;
};

type Plan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  benefits: PlanBenefit[];
  mostPopular?: boolean;
  idealFor: string;
  buttonText: string;
  color: string;
};

export default function PricingTable() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = [
    {
      id: 'gratuito',
      name: 'Grátis',
      price: 0,
      description: 'Conheça como funciona e experimente sem compromisso.',
      idealFor: 'Conhecer a plataforma',
      buttonText: 'Começar Grátis',
      color: 'blue',
      benefits: [
        { 
          icon: <FiClock className="text-primary h-5 w-5" />, 
          title: 'Ideal para primeiros contatos'
        }
      ],
      features: [
        { title: 'Visualiza no máximo 5 vagas por dia', included: true },
        { title: 'Vagas do dia anterior apenas', included: true },
        { title: 'Pesquisa por cidade', included: true },
        { title: 'Pesquisa por estabelecimentos', included: false },
        { title: 'Pesquisa por CEP e bairro', included: false },
        { title: 'Notificações por email', included: false },
        { title: 'Notificações por WhatsApp', included: false },
        { title: 'Acesso a plantões em tempo real', included: false },
      ],
    },
    {
      id: 'residente',
      name: 'Residente',
      price: billingPeriod === 'monthly' ? 29.90 : 299,
      description: 'Perfeito para residentes que precisam complementar a renda.',
      idealFor: 'Residentes médicos',
      buttonText: 'Escolher Residente',
      color: 'indigo',
      mostPopular: true,
      benefits: [
        { 
          icon: <FiClock className="text-secondary h-5 w-5" />, 
          title: 'Apenas R$0,99 por dia'
        },
        { 
          icon: <FiFilter className="text-secondary h-5 w-5" />, 
          title: 'Filtros avançados para sua rotina'
        }
      ],
      features: [
        { title: 'Número ilimitado de visualizações', included: true, highlighted: true },
        { title: 'Vagas em tempo real', included: true, highlighted: true },
        { title: 'Pesquisa por cidade', included: true },
        { title: 'Pesquisa por estabelecimentos', included: true },
        { title: 'Pesquisa por CEP e bairro', included: true },
        { title: 'Pesquisa avançada com mais filtros', included: true, highlighted: true },
        { title: 'Notificações diárias por email', included: true, highlighted: true },
        { title: 'Notificações em tempo real por WhatsApp', included: false },
      ],
    },
    {
      id: 'plantonista',
      name: 'Plantonista',
      price: billingPeriod === 'monthly' ? 59.90 : 599,
      description: 'Para médicos que dependem exclusivamente de plantões.',
      idealFor: 'Máxima prioridade',
      buttonText: 'Escolher Plantonista',
      color: 'purple',
      benefits: [
        { 
          icon: <FiAlertCircle className="text-primary h-5 w-5" />, 
          title: 'Seja o primeiro a saber das vagas'
        },
        { 
          icon: <FiSmartphone className="text-primary h-5 w-5" />, 
          title: 'Notificações em tempo real por WhatsApp'
        }
      ],
      features: [
        { title: 'Número ilimitado de visualizações', included: true },
        { title: 'Vagas em tempo real', included: true },
        { title: 'Pesquisa por cidade', included: true },
        { title: 'Pesquisa por estabelecimentos', included: true },
        { title: 'Pesquisa por CEP e bairro', included: true },
        { title: 'Pesquisa avançada com mais filtros', included: true },
        { title: 'Notificações diárias por email', included: true },
        { title: 'Notificações em tempo real por WhatsApp', included: true, highlighted: true },
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Escolha o plano ideal para você</h2>
          <p className="text-gray-600">
            Planos acessíveis feitos para médicos em início de carreira.
            Por apenas R$1,99/dia, encontre as melhores oportunidades para complementar sua renda.
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
              Anual <span className="text-xs text-green-600 font-bold">2 meses grátis</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${
                plan.mostPopular ? 'ring-2 ring-secondary relative' : ''
              }`}
            >
              {plan.mostPopular && (
                <div className="bg-secondary text-center py-2 text-sm font-medium text-white">
                  Mais popular entre residentes
                </div>
              )}
              <div className="p-6 flex-grow">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <span className={`badge bg-${plan.color}-100 text-${plan.color}-800 px-3`}>
                      {plan.idealFor}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{plan.description}</p>
                  <div className="mt-4 mb-6">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-bold">Grátis</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          R$ {plan.price.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-gray-600">/{billingPeriod === 'monthly' ? 'mês' : 'ano'}</span>
                        {plan.id === 'residente' && billingPeriod === 'monthly' && (
                          <div className="text-xs text-gray-500 mt-1">Equivalente a R$1,99/dia</div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Principal benefício */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  {plan.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center mb-2 last:mb-0">
                      {benefit.icon}
                      <span className="ml-2 text-sm font-medium">{benefit.title}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.included ? (
                        <FiCheck className={`h-5 w-5 ${feature.highlighted ? 'text-secondary' : 'text-green-500'} mr-2 flex-shrink-0`} />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${feature.included 
                          ? (feature.highlighted ? 'text-gray-900 font-medium' : 'text-gray-900') 
                          : 'text-gray-500'}`}
                      >
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <Link
                  href={`/registro?plan=${plan.id}`}
                  className={`btn w-full text-center ${plan.mostPopular ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            Todos os planos pagos incluem 7 dias de teste grátis. Cancele quando quiser.
            <br />
            <span className="text-xs mt-1 block">O valor equivalente a menos de 30 minutos de um plantão médio.</span>
          </p>
        </div>
      </div>
    </section>
  );
} 