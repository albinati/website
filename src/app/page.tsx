import Image from "next/image";
import Link from "next/link";
import { FiClock, FiDollarSign, FiSearch, FiFilter, FiSmartphone } from "react-icons/fi";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveTicker from "@/components/ticker/LiveTicker";
import QuickSearchForm from "@/components/forms/QuickSearchForm";
import PricingTable from "@/components/plans/PricingTable";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light-gray to-white">
          <div className="container-custom py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Pare de vasculhar <span className="text-primary">WhatsApp</span>.
                <br />
                <span className="text-secondary">Receba plantões filtrados.</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Conectamos você às melhores oportunidades de plantão, sem precisar ficar em centenas de grupos. 
                Filtrado, organizado, direto no seu e-mail. Todo dia.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link href="/registro" className="btn btn-primary btn-lg">
                  Criar conta grátis
                </Link>
                <Link href="/como-funciona" className="btn btn-outline btn-lg">
                  Como funciona
                </Link>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-600">
                <span className="flex items-center">
                  <FiClock className="mr-1 h-4 w-4 text-gray-400" />
                  Filtro diário
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <FiDollarSign className="mr-1 h-4 w-4 text-gray-400" />
                  Planos a partir de R$49/mês
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <FiSearch className="mr-1 h-4 w-4 text-gray-400" />
                  3.500+ médicos
                </span>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg shadow-xl overflow-hidden bg-white">
                <QuickSearchForm />
              </div>
            </div>
          </div>
        </section>

        {/* Ticker Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Oportunidades atualizadas em tempo real
              </h2>
              <p className="text-gray-600">
                Integramos com grupos de WhatsApp e processamos centenas de vagas diariamente
              </p>
            </div>
            <LiveTicker />
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-light-gray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Substituímos centenas de grupos de WhatsApp por uma única solução inteligente que entrega só o que você precisa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white mb-4">
                  <FiSmartphone size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Conectamos aos grupos</h3>
                <p className="text-gray-600">
                  Nosso sistema monitora centenas de grupos de WhatsApp de agências que publicam plantões.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white mb-4">
                  <FiFilter size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Filtramos as vagas</h3>
                <p className="text-gray-600">
                  Nosso algoritmo identifica vagas duplicadas, extrai dados relevantes e organiza tudo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white mb-4">
                  <FiSearch size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Você recebe só o ideal</h3>
                <p className="text-gray-600">
                  Conforme suas preferências, enviamos apenas as vagas que fazem sentido para você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingTable />

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O que dizem nossos médicos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Centenas de médicos já deixaram os grupos de WhatsApp de lado e usam o Caca-Plantão para encontrar suas oportunidades.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Dra. Amanda Silva</h4>
                    <p className="text-sm text-gray-600">Médica Generalista, 2 anos de formada</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Passei de 5 para 10 plantões mensais em apenas 2 semanas usando o Caca-Plantão. A praticidade de não precisar ler centenas de mensagens por dia me economiza horas!"
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Dr. Ricardo Mendes</h4>
                    <p className="text-sm text-gray-600">Emergencista, 3 anos de formado</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "O plano Frenetic me salvou quando fiquei desempregado. Em 48h consegui agendar 3 plantões para a mesma semana. Sistema prático e ótimo suporte."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Dra. Carolina Souza</h4>
                    <p className="text-sm text-gray-600">Clínica Médica, 1 ano de formada</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Eu odiava ter que ficar scrollando grupos de WhatsApp o dia todo. Agora recebo um email de manhã com as vagas que realmente fazem sentido para mim. Muito prático!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-light-gray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tire suas dúvidas sobre como o Caca-Plantão funciona e como pode ajudar na sua carreira.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Como o Caca-Plantão acessa os grupos de WhatsApp?</h3>
                  <p className="text-gray-600">
                    Nosso sistema usa um WhatsApp corporativo que participa de grupos de agências parceiras. Analisamos apenas mensagens públicas relacionadas a oportunidades de plantão.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Qual a vantagem em relação a estar nos grupos?</h3>
                  <p className="text-gray-600">
                    Economia de tempo e foco. Você não precisa ler centenas de mensagens não relacionadas, 
                    ver vagas repetidas ou que não se aplicam a você. Entregamos apenas o que faz sentido conforme seu perfil.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Como funciona a cobrança? Posso cancelar quando quiser?</h3>
                  <p className="text-gray-600">
                    Oferecemos planos mensais e anuais com 7 dias de teste grátis. Você pode cancelar a qualquer momento 
                    pela sua área do cliente. Não há multa ou fidelidade.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">O Caca-Plantão cobra comissão das agências ou dos médicos?</h3>
                  <p className="text-gray-600">
                    Não! Somos apenas um filtro inteligente. Você negocia diretamente com a agência ou hospital. 
                    Nosso modelo de receita é baseado apenas nas assinaturas, sem taxas ocultas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para deixar os grupos de WhatsApp de lado?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Milhares de plantões organizados e filtrados para você. 
              Economize tempo e encontre as melhores oportunidades.
            </p>
            <Link href="/registro" className="btn bg-secondary hover:bg-secondary-dark text-black btn-lg">
              Começar Gratuitamente
            </Link>
            <p className="mt-4 text-sm opacity-80">
              7 dias de teste grátis. Cancele quando quiser.
            </p>
        </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
