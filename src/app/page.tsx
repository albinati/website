import Image from "next/image";
import Link from "next/link";
import { FiClock, FiDollarSign, FiSearch, FiFilter, FiSmartphone, FiShield } from "react-icons/fi";

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
                Plantões ideais para <span className="text-primary">início de carreira</span>.
                <br />
                <span className="text-secondary">Sem burocracia.</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Médicos recém-formados encontram 40% mais oportunidades conosco. Filtrado, 
                organizado, direto no seu e-mail. Compatível com sua residência.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link href="/registro" className="btn btn-primary btn-lg">
                  Criar conta grátis
                </Link>
                <Link href="#como-funciona" className="btn btn-outline btn-lg">
                  Como funciona
                </Link>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-600">
                <span className="flex items-center">
                  <FiClock className="mr-1 h-4 w-4 text-gray-400" />
                  Economize tempo
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <FiDollarSign className="mr-1 h-4 w-4 text-gray-400" />
                  A partir de R$29,90/mês
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
                Encontre plantões compatíveis com sua residência médica e disponibilidade
              </p>
            </div>
            <LiveTicker />
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="py-16 bg-light-gray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Economize o tempo que gastaria em grupos de WhatsApp e invista em sua formação e descanso.
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
                  Adaptamos as vagas para sua disponibilidade e preferências, focando no início de carreira.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white mb-4">
                  <FiSearch size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Você recebe só o ideal</h3>
                <p className="text-gray-600">
                  Compare valores e escolha as melhores oportunidades para complementar sua renda.
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
                Médicos recém-formados já deixaram os grupos de WhatsApp de lado e usam o Caça Plantão para complementar sua renda.
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
                  "Consigo conciliar a residência com plantões extras. O Caça Plantão me economiza horas que eu gastava em grupos de WhatsApp!"
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
                  "O plano Essencial custa apenas R$0,99 por dia e me ajuda a complementar a renda no início da carreira. Melhor investimento que fiz!"
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
                  "Recém-formada, eu precisava de renda extra, mas tinha pouco tempo para buscar. O Caça Plantão me envia exatamente o que preciso!"
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
                Tire suas dúvidas sobre como o Caça Plantão pode ajudar no início da sua carreira médica.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Como o Caça Plantão acessa os grupos de WhatsApp?</h3>
                  <p className="text-gray-600">
                    Nosso sistema usa um WhatsApp corporativo que participa de grupos de agências parceiras. Analisamos apenas mensagens públicas relacionadas a oportunidades de plantão.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Posso usar o Caça Plantão durante a residência médica?</h3>
                  <p className="text-gray-600">
                    Sim! Muitos dos nossos usuários são residentes que complementam sua renda com plantões compatíveis com seus horários. Nossos filtros ajudam a encontrar oportunidades ideais.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Como funciona a cobrança? Posso cancelar quando quiser?</h3>
                  <p className="text-gray-600">
                    Oferecemos planos mensais a partir de R$29,90 com 7 dias de teste grátis. Você pode cancelar a qualquer momento 
                    pela sua área do cliente. Não há multa ou fidelidade.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Como o Caça Plantão protege minha privacidade?</h3>
                  <p className="text-gray-600">
                    Seu número nunca é exposto em grupos. Nossa equipe monitora os grupos de WhatsApp para você, filtrando as oportunidades sem comprometer seus dados pessoais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Encontre plantões ideais para o início da sua carreira
            </h2>
            <div className="max-w-3xl mx-auto mb-8">
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 font-bold text-xl">✓</span>
                  <span>Acesso a <strong>oportunidades exclusivas</strong> para médicos recém-formados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 font-bold text-xl">✓</span>
                  <span>Plantões compatíveis com sua <strong>residência médica</strong> ou horários de estudo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 font-bold text-xl">✓</span>
                  <span>Economize <strong>até 5 horas por semana</strong> que seriam gastas em grupos de WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 font-bold text-xl">✓</span>
                  <span>Encontre plantões com <strong>melhores salários</strong> e mais próximos da sua localização</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 font-bold text-xl">✓</span>
                  <span>Proteja sua <strong>privacidade e número pessoal</strong>, evitando exposição em grupos públicos</span>
                </li>
              </ul>
            </div>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-medium text-white">
              Por apenas R$0,99 por dia, tenha acesso às melhores oportunidades para médicos recém-formados.
            </p>
            <Link href="/registro" className="btn bg-secondary hover:bg-secondary-dark text-white btn-lg">
              Começar Gratuitamente
            </Link>
            <p className="mt-4 text-sm text-white opacity-90">
              7 dias de teste grátis. Cancele quando quiser.
            </p>
        </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
