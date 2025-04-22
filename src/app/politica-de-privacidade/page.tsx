import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="bg-light-gray py-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Política de Privacidade</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
      
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">1. Introdução</h2>
              <p className="text-gray-700 leading-relaxed">
                A Caça Plantão está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como 
                coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">2. Informações que Coletamos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Coletamos os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong className="font-medium">Informações de cadastro:</strong> nome, e-mail, número de telefone, CRM, especialidade médica</li>
                <li><strong className="font-medium">Informações de perfil:</strong> experiência profissional, preferências de plantão</li>
                <li><strong className="font-medium">Dados de uso:</strong> informações sobre como você interage com nossa plataforma</li>
                <li><strong className="font-medium">Informações de dispositivo:</strong> tipo de dispositivo, sistema operacional, navegador</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">3. Como Usamos suas Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar sua experiência na plataforma</li>
                <li>Processar pagamentos e gerenciar sua assinatura</li>
                <li>Enviar notificações sobre vagas de plantão relevantes</li>
                <li>Comunicações sobre sua conta e atualizações do serviço</li>
                <li>Garantir a segurança da plataforma</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Podemos compartilhar suas informações nas seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong className="font-medium">Provedores de serviço:</strong> empresas que nos auxiliam na operação da plataforma (processamento de pagamentos, hospedagem, análise de dados)</li>
                <li><strong className="font-medium">Parceiros de negócios:</strong> para fornecer serviços que solicitou</li>
                <li><strong className="font-medium">Conformidade legal:</strong> quando exigido por lei ou para proteger direitos legais</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Não vendemos suas informações pessoais a terceiros.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">5. Segurança das Informações</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso 
                não autorizado, perda acidental ou alteração. No entanto, nenhum sistema é completamente seguro, 
                e não podemos garantir a segurança absoluta de suas informações.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">6. Seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Acesso às suas informações pessoais</li>
                <li>Correção de informações imprecisas</li>
                <li>Exclusão de suas informações pessoais</li>
                <li>Portabilidade de seus dados</li>
                <li>Revogação do consentimento</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:privacidade@cacaplantao.com.br" className="text-primary font-semibold hover:underline">privacidade@cacaplantao.com.br</a>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">7. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos suas informações pessoais pelo tempo necessário para fornecer nossos serviços, 
                cumprir nossas obrigações legais ou resolver disputas. Quando não houver mais necessidade 
                legítima de processar seus dados, eles serão excluídos ou anonimizados.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">8. Crianças</h2>
              <p className="text-gray-700 leading-relaxed">
                Nossos serviços não são destinados a pessoas menores de 18 anos. Não coletamos 
                intencionalmente informações pessoais de crianças.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">9. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente 
                estará sempre disponível em nosso site. Recomendamos que você verifique regularmente 
                esta página para estar ciente de quaisquer alterações.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">10. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre 
                como tratamos suas informações pessoais, entre em contato conosco pelo e-mail: 
                <a href="mailto:privacidade@cacaplantao.com.br" className="text-primary font-semibold hover:underline"> privacidade@cacaplantao.com.br</a>
              </p>
            </section>
          </div>
          
          <div className="mt-10 p-6 bg-primary-light rounded-lg text-center">
            <p className="text-gray-700 font-medium">
              Esta Política de Privacidade deve ser lida em conjunto com nossos <a href="/termos-de-uso" className="text-primary font-semibold hover:underline">Termos de Uso</a> e 
              <a href="/politica-de-cookies" className="text-primary font-semibold hover:underline"> Política de Cookies</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 