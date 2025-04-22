import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <div className="bg-light-gray py-10">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Política de Cookies</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
      
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">1. O que são Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies são pequenos arquivos de texto que são armazenados no seu navegador ou dispositivo quando você visita um site. 
                Eles são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente, bem como fornecer informações 
                aos proprietários do site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">2. Como Utilizamos os Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos cookies pelos seguintes motivos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong className="font-medium">Cookies essenciais:</strong> Necessários para o funcionamento do site. Eles permitem navegar e usar 
                recursos básicos, como áreas seguras e acesso à sua conta.</li>
                <li><strong className="font-medium">Cookies de desempenho:</strong> Coletam informações sobre como os usuários utilizam nosso site, 
                como quais páginas são mais visitadas. Estas informações são utilizadas para melhorar o site.</li>
                <li><strong className="font-medium">Cookies de funcionalidade:</strong> Permitem que o site se lembre de escolhas que você faz 
                (como seu nome de usuário, idioma ou região) e forneça recursos aprimorados.</li>
                <li><strong className="font-medium">Cookies de publicidade:</strong> Utilizados para entregar anúncios mais relevantes para você e seus interesses.</li>
                <li><strong className="font-medium">Cookies de análise:</strong> Permitem-nos reconhecer e contar o número de visitantes e ver como os 
                visitantes navegam no site quando o utilizam.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">3. Tipos de Cookies que Utilizamos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Os principais cookies que utilizamos incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong className="font-medium">_ga, _gid, _gat (Google Analytics):</strong> Utilizados para distinguir usuários e controlar a taxa de solicitações.</li>
                <li><strong className="font-medium">session_id:</strong> Cookie essencial que mantém sua sessão ativa durante a navegação.</li>
                <li><strong className="font-medium">preferences:</strong> Armazena suas preferências de uso e configurações.</li>
                <li><strong className="font-medium">auth_token:</strong> Mantém você conectado em sua conta quando você marca a opção "Lembrar-me".</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">4. Controle de Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Você pode controlar e gerenciar cookies de várias maneiras. Considere que a remoção ou o bloqueio de cookies 
                pode impactar sua experiência de usuário e partes do nosso site podem não funcionar corretamente.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                A maioria dos navegadores permite que você veja quais cookies você tem e que os exclua individualmente ou bloqueie 
                cookies de determinados ou todos os sites. Esteja ciente de que qualquer preferência será perdida se você excluir 
                todos os cookies, incluindo a preferência de desativar cookies, pois isso requer a inserção de um cookie para ser desativado.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Para mais informações sobre como gerenciar cookies nos seguintes navegadores, visite:
              </p>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li>• <a href="https://support.google.com/chrome/answer/95647" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li>• <a href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li>• <a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                <li>• <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">5. Cookies de Terceiros</h2>
              <p className="text-gray-700 leading-relaxed">
                Alguns cookies são colocados por serviços de terceiros que aparecem em nossas páginas. Eles são definidos por 
                organizações como Google Analytics, Google Ads, Facebook, entre outros, para medir o uso do site, personalizar 
                anúncios e fornecer conteúdo relevante nas redes sociais.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">6. Alterações na Política de Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Cookies periodicamente em resposta a alterações legais, técnicas ou comerciais. 
                Quando atualizarmos nossa Política de Cookies, tomaremos as medidas apropriadas para informá-lo, de acordo com a 
                significância das alterações que fizermos.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-primary mb-4">7. Entre em Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Se você tiver alguma dúvida sobre como usamos cookies, entre em contato conosco pelo e-mail: 
                <a href="mailto:privacidade@cacaplantao.com.br" className="text-primary font-semibold hover:underline"> privacidade@cacaplantao.com.br</a>
              </p>
            </section>
          </div>
          
          <div className="mt-10 p-6 bg-primary-light rounded-lg text-center">
            <p className="text-gray-700 font-medium">
              Esta Política de Cookies deve ser lida em conjunto com nossa <a href="/politica-de-privacidade" className="text-primary font-semibold hover:underline">Política de Privacidade</a> e 
              <a href="/termos-de-uso" className="text-primary font-semibold hover:underline"> Termos de Uso</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 