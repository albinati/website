import Link from 'next/link';
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark text-white mt-12">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-white text-xl font-bold mr-1">Caça-</span>
              <span className="text-secondary text-xl font-bold">Plantão</span>
            </Link>
            <p className="text-gray-300 text-sm">
              A plataforma que conecta médicos a oportunidades de plantão, eliminando a necessidade de ficar em diversos grupos de WhatsApp.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://instagram.com/cacaplantao" target="_blank" className="text-gray-300 hover:text-white">
                <FiInstagram size={20} />
              </Link>
              <Link href="https://twitter.com/cacaplantao" target="_blank" className="text-gray-300 hover:text-white">
                <FiTwitter size={20} />
              </Link>
              <Link href="https://linkedin.com/company/cacaplantao" target="_blank" className="text-gray-300 hover:text-white">
                <FiLinkedin size={20} />
              </Link>
              <Link href="https://facebook.com/cacaplantao" target="_blank" className="text-gray-300 hover:text-white">
                <FiFacebook size={20} />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white text-sm">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações Legais */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Informações Legais</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termos-de-uso" className="text-gray-300 hover:text-white text-sm">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-gray-300 hover:text-white text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-gray-300 hover:text-white text-sm">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/lgpd" className="text-gray-300 hover:text-white text-sm">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">
                Email: <a href="mailto:contato@cacaplantao.com.br" className="hover:text-white">contato@cacaplantao.com.br</a>
              </li>
              <li className="text-gray-300 text-sm">
                Suporte: <a href="mailto:suporte@cacaplantao.com.br" className="hover:text-white">suporte@cacaplantao.com.br</a>
              </li>
              <li className="text-gray-300 text-sm">
                Comercial: <a href="mailto:comercial@cacaplantao.com.br" className="hover:text-white">comercial@cacaplantao.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <div>
            &copy; {currentYear} Caça-Plantão. Todos os direitos reservados.
          </div>
          <div className="mt-2 md:mt-0">
            CNPJ: XX.XXX.XXX/0001-XX
          </div>
        </div>
      </div>
    </footer>
  );
} 