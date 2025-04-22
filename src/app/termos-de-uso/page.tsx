import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <div className="bg-light-gray py-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Termos de Uso</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
      
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e usar os serviços da plataforma Caça Plantão, você concorda com estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-700 leading-relaxed">
                O Caça Plantão é uma plataforma que conecta médicos a oportunidades de plantão disponíveis em diversas 
                instituições de saúde. Nosso serviço coleta informações de vagas de plantões médicos divulgadas publicamente 
                e disponibiliza estas informações de forma organizada para nossos usuários.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">3. Elegibilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Para utilizar nossa plataforma, você deve ser um profissional médico devidamente registrado no Conselho 
                Regional de Medicina (CRM) ou um estudante de medicina em fase de formação. A verificação das suas 
                credenciais pode ser solicitada a qualquer momento.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">4. Cadastro e Segurança</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ao se cadastrar na plataforma Caça Plantão, você é responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fornecer informações precisas e completas</li>
                <li>Manter a confidencialidade da sua senha e conta</li>
                <li>Notificar imediatamente qualquer uso não autorizado da sua conta</li>
                <li>Assumir responsabilidade por todas as atividades realizadas com sua conta</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">5. Planos e Pagamentos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                O Caça Plantão oferece diferentes planos de assinatura, incluindo um plano gratuito com recursos limitados. 
                Para os planos pagos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Os pagamentos são processados através de gateways de pagamento seguros</li>
                <li>As assinaturas são renovadas automaticamente, a menos que canceladas</li>
                <li>Reembolsos são processados de acordo com nossa política de reembolso</li>
                <li>Oferecemos um período de teste gratuito de 7 dias para novos usuários</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">6. Uso da Plataforma</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ao utilizar nossa plataforma, você concorda em:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Não violar qualquer lei ou regulamento aplicável</li>
                <li>Não interferir ou interromper a integridade ou o desempenho da plataforma</li>
                <li>Não tentar acessar dados que não sejam destinados a você</li>
                <li>Não reproduzir, duplicar, copiar, vender ou revender qualquer parte do serviço</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                O Caça Plantão atua como um intermediário, fornecendo informações sobre oportunidades de plantão. Não somos 
                responsáveis pela precisão das informações fornecidas pelas instituições de saúde, nem pela qualidade dos 
                plantões, condições de trabalho ou pagamentos relacionados às vagas divulgadas.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">8. Alterações nos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor 
                imediatamente após a publicação dos termos atualizados. É sua responsabilidade verificar regularmente 
                se houve alterações.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">9. Cancelamento</h2>
              <p className="text-gray-700 leading-relaxed">
                Você pode cancelar sua assinatura a qualquer momento através da sua área do cliente. 
                O acesso ao serviço continuará disponível até o final do período pago.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">10. Disposições Gerais</h2>
              <p className="text-gray-700 leading-relaxed">
                Estes Termos de Uso constituem o acordo completo entre você e o Caça Plantão e substituem todos os acordos 
                anteriores relacionados ao assunto aqui tratado. Se qualquer disposição destes termos for considerada inválida, 
                as demais disposições permanecerão em pleno vigor e efeito.
              </p>
            </section>
          </div>
          
          <div className="mt-10 p-6 bg-primary-light rounded-lg text-center">
            <p className="text-gray-700 font-medium">
              Se você tiver dúvidas sobre estes termos, entre em contato conosco pelo e-mail <a href="mailto:suporte@cacaplantao.com.br" className="text-primary font-semibold hover:underline">suporte@cacaplantao.com.br</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 