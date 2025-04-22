'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiArrowLeft, FiCheck } from 'react-icons/fi';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RecuperarSenhaPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulação de um atraso de rede - no futuro, será substituído pela integração com Keycloak
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Em produção, isto chamaria a API Keycloak para enviar o e-mail de recuperação
      setSuccess(true);
      
      // Avançar para o próximo passo
      setStep(2);
    } catch (err) {
      setError('Ocorreu um erro ao enviar o e-mail de recuperação. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulação de um atraso de rede - no futuro, será substituído pela integração com Keycloak
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Em produção, isto verificaria o código via API Keycloak
      // Avançar para o próximo passo - digitar nova senha
      setStep(3);
    } catch (err) {
      setError('Código de verificação inválido. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulação de um atraso de rede - no futuro, será substituído pela integração com Keycloak
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Em produção, isto atualizaria a senha via API Keycloak
      // Mostrar confirmação final
      setStep(4);
    } catch (err) {
      setError('Ocorreu um erro ao atualizar sua senha. Tente novamente.');
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
              {step === 1 && (
                <>
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold">Recuperar Senha</h1>
                    <p className="text-gray-600 mt-2">
                      Informe seu e-mail para receber instruções de recuperação
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmitEmail} className="space-y-4">
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
                          value={email}
                          onChange={handleEmailChange}
                          required
                          className="input pl-10"
                          placeholder="seu@email.com"
                        />
                      </div>
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
                          <span>Enviando...</span>
                        ) : (
                          <span>Enviar instruções</span>
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-6">
                    <Link href="/login" className="text-primary font-medium flex items-center justify-center">
                      <FiArrowLeft size={16} className="mr-2" />
                      Voltar para o login
                    </Link>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold">Verificar código</h1>
                    <p className="text-gray-600 mt-2">
                      Digite o código de verificação enviado para {email}
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleVerificationCodeSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="verificationCode" className="label">
                        Código de verificação
                      </label>
                      <input
                        type="text"
                        id="verificationCode"
                        name="verificationCode"
                        required
                        className="input"
                        placeholder="Digite o código"
                      />
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
                          <span>Verificando...</span>
                        ) : (
                          <span>Verificar código</span>
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-6">
                    <button 
                      onClick={() => setStep(1)} 
                      className="text-primary font-medium flex items-center justify-center mx-auto"
                    >
                      <FiArrowLeft size={16} className="mr-2" />
                      Voltar
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold">Nova senha</h1>
                    <p className="text-gray-600 mt-2">
                      Digite sua nova senha
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleNewPasswordSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="newPassword" className="label">
                        Nova senha
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        required
                        className="input"
                        placeholder="Mínimo 8 caracteres"
                        minLength={8}
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="label">
                        Confirme a nova senha
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        className="input"
                        placeholder="Digite sua senha novamente"
                        minLength={8}
                      />
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
                          <span>Atualizando...</span>
                        ) : (
                          <span>Atualizar senha</span>
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-6">
                    <button 
                      onClick={() => setStep(2)} 
                      className="text-primary font-medium flex items-center justify-center mx-auto"
                    >
                      <FiArrowLeft size={16} className="mr-2" />
                      Voltar
                    </button>
                  </div>
                </>
              )}

              {step === 4 && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="text-green-600 h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Senha atualizada com sucesso!</h2>
                  <p className="text-gray-600 mb-6">
                    Sua senha foi atualizada. Agora você pode entrar com sua nova senha.
                  </p>
                  <Link href="/login" className="btn btn-primary">
                    Ir para o login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 