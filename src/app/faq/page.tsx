import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      <Header />
      <div className="bg-light-gray py-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Perguntas Frequentes</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Encontre respostas para as dúvidas mais comuns sobre o Caça Plantão
          </p>
        </div>
      </div>
      
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">Como o Caça Plantão acessa os grupos de WhatsApp?</h3>
              <p className="text-gray-600">
                Nosso sistema usa um WhatsApp corporativo que participa de grupos de agências parceiras. Analisamos apenas mensagens públicas relacionadas a oportunidades de plantão.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">Posso usar o Caça Plantão durante a residência médica?</h3>
              <p className="text-gray-600">
                Sim! Muitos dos nossos usuários são residentes que complementam sua renda com plantões compatíveis com seus horários. Nossos filtros ajudam a encontrar oportunidades ideais.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">Como funciona a cobrança? Posso cancelar quando quiser?</h3>
              <p className="text-gray-600">
                Oferecemos planos mensais a partir de R$29,90 com 7 dias de teste grátis. Você pode cancelar a qualquer momento 
                pela sua área do cliente. Não há multa ou fidelidade.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">Como o Caça Plantão protege minha privacidade?</h3>
              <p className="text-gray-600">
                Seu número nunca é exposto em grupos. Nossa equipe monitora os grupos de WhatsApp para você, filtrando as oportunidades sem comprometer seus dados pessoais.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">Que tipos de vagas são disponibilizadas na plataforma?</h3>
              <p className="text-gray-600">
                Disponibilizamos vagas para médicos em hospitais, UPAs, clínicas e outras unidades de saúde. As vagas são filtradas para médicos em início de carreira e residentes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">Preciso de um número mínimo de experiência para usar a plataforma?</h3>
              <p className="text-gray-600">
                Não! A plataforma é especialmente desenhada para médicos recém-formados e residentes que buscam oportunidades para complementar sua renda.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">É possível filtrar vagas por especialidade?</h3>
              <p className="text-gray-600">
                Sim, é possível filtrar vagas por especialidade, localização, valor do plantão, tipo de estabelecimento e muito mais. Nossos filtros avançados estão disponíveis nos planos pagos.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-primary">Como recebo as notificações de novas vagas?</h3>
              <p className="text-gray-600">
                Dependendo do seu plano, você pode receber notificações por e-mail diariamente ou notificações em tempo real por WhatsApp quando uma vaga que corresponda aos seus critérios for publicada.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-primary-light p-8 rounded-lg">
            <p className="text-gray-700 font-medium mb-4">Não encontrou o que procurava?</p>
            <Link href="mailto:suporte@cacaplantao.com.br" className="btn btn-primary">
              Entre em contato com o suporte
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 