'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock } from 'react-icons/fi';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulação de login - em produção, enviar para a API/Keycloak
    try {
      // Simulação de atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Simulação de credenciais (para demo)
      if (formData.email === 'demo@cacaplantao.com.br' && formData.password === 'senha123') {
        router.push('/dashboard');
      } else {
        setError('E-mail ou senha incorretos.');
      }
    } catch (err) {
      setError('Ocorreu um erro durante o login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-light-gray min-h-screen py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">Acesse sua conta</h1>
                <p className="text-gray-600 mt-2">
                  Entre para ver as melhores oportunidades de plantão
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="label">
                    E-mail
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input pl-10"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="label">
                      Senha
                    </label>
                    <Link href="/recuperar-senha" className="text-sm text-primary hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="input pl-10"
                      placeholder="Sua senha"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                    Lembrar de mim
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn ${
                      isLoading ? 'bg-gray-400' : 'btn-primary'
                    } w-full flex items-center justify-center`}
                  >
                    {isLoading ? (
                      <span>Entrando...</span>
                    ) : (
                      <span>Entrar</span>
                    )}
                  </button>
                </div>

                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Ainda não possui uma conta?{' '}
                    <Link href="/registro" className="text-primary font-medium">
                      Cadastre-se
                    </Link>
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-xs text-center text-gray-500">
                    Ao fazer login, você concorda com nossos{' '}
                    <Link href="/termos-de-uso" className="text-primary hover:underline">
                      Termos de Uso
                    </Link>{' '}
                    e{' '}
                    <Link href="/politica-de-privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 