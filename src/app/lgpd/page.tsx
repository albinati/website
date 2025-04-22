import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LGPDPage() {
  return (
    <>
      <Header />
      <div className="bg-light-gray py-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">LGPD - Lei Geral de Proteção de Dados</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
      
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">1. Introdução à LGPD</h2>
              <p className="text-gray-700 leading-relaxed">
                A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018, é a legislação brasileira que regula as atividades 
                de tratamento de dados pessoais. A LGPD tem como objetivo proteger os direitos fundamentais de liberdade e de privacidade 
                e o livre desenvolvimento da personalidade da pessoa natural.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">2. Nosso Compromisso</h2>
              <p className="text-gray-700 leading-relaxed">
                A Caça Plantão está comprometida com a conformidade com a LGPD e com a proteção dos dados pessoais de seus usuários. 
                Implementamos medidas técnicas e organizacionais para garantir a segurança e a privacidade dos dados tratados em 
                nossa plataforma.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">3. Bases Legais para o Tratamento de Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                De acordo com a LGPD, só podemos tratar seus dados pessoais se tivermos uma base legal para fazê-lo. Tratamos seus 
                dados com base nas seguintes bases legais:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong className="font-medium">Consentimento:</strong> Quando você concorda explicitamente com o tratamento de seus dados para finalidades específicas.</li>
                <li><strong className="font-medium">Execução de Contrato:</strong> Quando o tratamento é necessário para cumprir nossas obrigações contratuais com você.</li>
                <li><strong className="font-medium">Interesse Legítimo:</strong> Quando o tratamento é necessário para atender aos interesses legítimos da Caça Plantão ou de terceiros.</li>
                <li><strong className="font-medium">Cumprimento de Obrigação Legal:</strong> Quando o tratamento é necessário para cumprir uma obrigação legal.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">4. Seus Direitos como Titular de Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A LGPD garante diversos direitos aos titulares de dados pessoais. Como usuário da plataforma Caça Plantão, você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong className="font-medium">Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados.</li>
                <li><strong className="font-medium">Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong className="font-medium">Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.</li>
                <li><strong className="font-medium">Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto.</li>
                <li><strong className="font-medium">Informação:</strong> Ser informado sobre as entidades públicas e privadas com as quais compartilhamos seus dados.</li>
                <li><strong className="font-medium">Revogação do Consentimento:</strong> Revogar o consentimento a qualquer momento.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">5. Como Exercer seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Para exercer qualquer um dos direitos acima, você pode entrar em contato com nosso Encarregado de Proteção de 
                Dados (DPO) através do e-mail: <a href="mailto:dpo@cacaplantao.com.br" className="text-primary font-semibold hover:underline">dpo@cacaplantao.com.br</a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Procuraremos responder a todas as solicitações dentro de 15 dias, conforme estabelecido pela LGPD.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">6. Medidas de Segurança</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Implementamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados 
                e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Criptografia de dados sensíveis</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de ameaças</li>
                <li>Treinamento regular de equipe sobre práticas de segurança de dados</li>
                <li>Política de mesa limpa e tela limpa</li>
                <li>Avaliações regulares de vulnerabilidade e teste de penetração</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">7. Transferência Internacional de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Alguns de nossos serviços podem envolver a transferência de dados para servidores localizados fora do Brasil. 
                Quando isso ocorre, garantimos que a transferência seja feita de acordo com os requisitos da LGPD, 
                assegurando um nível adequado de proteção aos seus dados pessoais.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">8. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, 
                incluindo para fins de cumprimento de quaisquer obrigações legais, contratuais, de prestação de contas ou requisição 
                de autoridades competentes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">9. Incidentes de Segurança</h2>
              <p className="text-gray-700 leading-relaxed">
                Em caso de incidentes de segurança que possam acarretar risco ou dano relevante aos titulares dos dados, 
                comunicaremos o ocorrido à Autoridade Nacional de Proteção de Dados (ANPD) e aos titulares afetados, 
                conforme estabelecido pela LGPD.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">10. Contato do Encarregado (DPO)</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) está disponível para esclarecer dúvidas, 
                receber comunicações e adotar providências relacionadas à proteção de dados pessoais:
              </p>
              <p className="text-gray-700 leading-relaxed pl-6">
                <strong className="font-medium">Nome:</strong> Departamento de Proteção de Dados<br />
                <strong className="font-medium">E-mail:</strong> <a href="mailto:dpo@cacaplantao.com.br" className="text-primary font-semibold hover:underline">dpo@cacaplantao.com.br</a>
              </p>
            </section>
          </div>
          
          <div className="mt-10 p-6 bg-primary-light rounded-lg text-center">
            <p className="text-gray-700 font-medium">
              Esta página sobre a LGPD deve ser lida em conjunto com nossa <a href="/politica-de-privacidade" className="text-primary font-semibold hover:underline">Política de Privacidade</a>, 
              <a href="/politica-de-cookies" className="text-primary font-semibold hover:underline"> Política de Cookies</a> e 
              <a href="/termos-de-uso" className="text-primary font-semibold hover:underline"> Termos de Uso</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 