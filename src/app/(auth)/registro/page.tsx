'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCreditCard, FiX, FiWifi } from 'react-icons/fi';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CityAutocomplete from '@/components/forms/CityAutocomplete';

export default function RegistroPage() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan') || 'gratuito';
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    crm: '',
    phone: '',
    specialties: [] as string[],
    preferredLocations: [] as string[],
    minSalary: 800,
    prefersCashOnly: false,
    interestedInRemote: true,
    plan: planId,
    acceptTerms: false,
  });
  
  // State for the new location being added
  const [newLocation, setNewLocation] = useState('');
  // Add error states
  const [errors, setErrors] = useState({
    passwordMatch: false,
    termsAccepted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      
      // Clear terms error when accepted
      if (name === 'acceptTerms' && (e.target as HTMLInputElement).checked) {
        setErrors(prev => ({...prev, termsAccepted: false}));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      
      // Clear password match error if changing password fields
      if (name === 'password' || name === 'confirmPassword') {
        setErrors(prev => ({...prev, passwordMatch: false}));
      }
    }
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    
    setFormData((prev) => ({
      ...prev,
      [name]: selectedValues,
    }));
  };
  
  // Function to add a new location
  const addLocation = () => {
    if (newLocation && !formData.preferredLocations.includes(newLocation)) {
      setFormData(prev => ({
        ...prev,
        preferredLocations: [...prev.preferredLocations, newLocation]
      }));
      setNewLocation('');
    }
  };
  
  // Function to remove a location
  const removeLocation = (locationToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      preferredLocations: prev.preferredLocations.filter(loc => loc !== locationToRemove)
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        setErrors(prev => ({...prev, passwordMatch: true}));
        return false;
      }
    }
    
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if terms are accepted
    if (!formData.acceptTerms) {
      setErrors(prev => ({...prev, termsAccepted: true}));
      return;
    }
    
    // Simulação de envio - em produção, enviar para a API
    alert('Cadastro realizado com sucesso! Redirecionando para pagamento...');
  };

  const specialtyOptions = [
    { value: 'CLINICA_GERAL', label: 'Clínica Geral' },
    { value: 'EMERGENCIA', label: 'Emergência' },
    { value: 'PEDIATRIA', label: 'Pediatria' },
    { value: 'GINECOLOGIA', label: 'Ginecologia' },
    { value: 'ORTOPEDIA', label: 'Ortopedia' },
    { value: 'CARDIOLOGIA', label: 'Cardiologia' },
    { value: 'UTI', label: 'UTI' },
  ];

  return (
    <>
      <Header />
      <main className="bg-light-gray min-h-screen py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">
                  {step === 1 ? 'Crie sua conta' : step === 2 ? 'Informações Profissionais' : 'Preferências de Plantão'}
                </h1>
                <div className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-gray-300'}`}></span>
                  <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></span>
                  <span className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="label">
                        Nome completo
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input pl-10"
                          placeholder="Dr. João Silva"
                        />
                      </div>
                    </div>

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
                      <label htmlFor="password" className="label">
                        Senha
                      </label>
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
                          placeholder="Senha (mínimo 8 caracteres)"
                          minLength={8}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="label">
                        Confirme sua senha
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className={`input pl-10 ${errors.passwordMatch ? 'border-red-500' : ''}`}
                          placeholder="Digite sua senha novamente"
                        />
                      </div>
                      {errors.passwordMatch && (
                        <p className="text-red-500 text-sm mt-1">As senhas não coincidem.</p>
                      )}
                    </div>

                    <div className="flex items-start mt-4">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className={`h-4 w-4 mt-1 text-primary focus:ring-primary border-gray-300 rounded ${errors.termsAccepted ? 'border-red-500' : ''}`}
                      />
                      <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                        Ao criar uma conta, você concorda com nossos{' '}
                        <Link href="/termos-de-uso" target="_blank" className="text-primary hover:underline">
                          Termos de Uso
                        </Link>
                        ,{' '}
                        <Link href="/politica-de-privacidade" target="_blank" className="text-primary hover:underline">
                          Política de Privacidade
                        </Link>
                        {' '}e{' '}
                        <Link href="/politica-de-cookies" target="_blank" className="text-primary hover:underline">
                          Política de Cookies
                        </Link>
                        .
                      </label>
                    </div>
                    {errors.termsAccepted && (
                      <p className="text-red-500 text-sm mt-1">
                        Você precisa aceitar os termos e condições para continuar.
                      </p>
                    )}

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary w-full"
                      >
                        Continuar
                      </button>
                    </div>

                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600">
                        Já possui uma conta?{' '}
                        <Link href="/login" className="text-primary font-medium">
                          Faça login
                        </Link>
                      </p>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="crm" className="label">
                        CRM (com UF)
                      </label>
                      <input
                        type="text"
                        id="crm"
                        name="crm"
                        value={formData.crm}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="CRM/SP 123456"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Ex: CRM/SP 123456 - Usamos seu CRM para verificar seu registro profissional
                      </p>
                    </div>

                    <div>
                      <label htmlFor="phone" className="label">
                        Telefone (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="(11) 98765-4321"
                      />
                    </div>

                    <div>
                      <label htmlFor="specialties" className="label">
                        Especialidades (selecione uma ou mais)
                      </label>
                      <select
                        id="specialties"
                        name="specialties"
                        multiple
                        value={formData.specialties}
                        onChange={handleMultiSelectChange}
                        className="input"
                        size={4}
                      >
                        {specialtyOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-gray-500 mt-1">
                        Segure CTRL para selecionar múltiplas opções
                      </p>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-outline flex-1"
                      >
                        <FiArrowLeft className="mr-2" /> Voltar
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary flex-1"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="label">Regiões de interesse</label>
                      
                      {/* Cidades já adicionadas */}
                      {formData.preferredLocations.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {formData.preferredLocations.map((location, index) => (
                            <div 
                              key={index} 
                              className="bg-light-gray px-3 py-1 rounded-full flex items-center"
                            >
                              <span className="text-sm">{location}</span>
                              <button 
                                type="button" 
                                onClick={() => removeLocation(location)} 
                                className="ml-2 text-gray-500 hover:text-gray-700"
                              >
                                <FiX size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Input para adicionar nova cidade */}
                      <div className="flex gap-2">
                        <CityAutocomplete
                          value={newLocation}
                          onChange={setNewLocation}
                          placeholder="Digite uma cidade"
                          className="flex-1"
                        />
                        <button 
                          type="button" 
                          onClick={addLocation}
                          className="btn btn-sm btn-outline"
                          disabled={!newLocation}
                        >
                          Adicionar
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="minSalary" className="label">
                        Valor mínimo por plantão (R$)
                      </label>
                      <input
                        type="number"
                        id="minSalary"
                        name="minSalary"
                        value={formData.minSalary}
                        onChange={handleChange}
                        min={0}
                        className="input"
                      />
                    </div>

                    <div className="space-y-3 mt-4">
                      {/* Opção para plantões remotos */}
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="interestedInRemote"
                          name="interestedInRemote"
                          checked={formData.interestedInRemote}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="interestedInRemote" className="ml-2 flex items-center text-sm text-gray-700">
                          <FiWifi className="mr-1 text-gray-500" size={16} />
                          Tenho interesse em plantões remotos (telemedicina)
                        </label>
                      </div>

                      {/* Opção para pagamento à vista */}
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="prefersCashOnly"
                          name="prefersCashOnly"
                          checked={formData.prefersCashOnly}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="prefersCashOnly" className="ml-2 block text-sm text-gray-700">
                          Preferência para pagamentos à vista
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-light-gray rounded-lg">
                      <h3 className="font-semibold mb-2">Plano selecionado: {formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {formData.plan === 'gratuito' && 'Plano gratuito com recursos limitados'}
                        {formData.plan === 'residente' && 'Recursos completos para residentes - R$29,90/mês'}
                        {formData.plan === 'plantonista' && 'Recursos premium com notificações em tempo real - R$59,90/mês'}
                      </p>
                      {formData.plan !== 'gratuito' && (
                        <p className="text-xs text-gray-500">
                          Você terá 7 dias de teste grátis. Cancele quando quiser.
                        </p>
                      )}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-outline flex-1"
                      >
                        <FiArrowLeft className="mr-2" /> Voltar
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary flex-1 items-center justify-center flex"
                      >
                        {formData.plan !== 'gratuito' ? (
                          <>
                            <FiCreditCard className="mr-2" />
                            Finalizar e Configurar Pagamento
                          </>
                        ) : (
                          <>
                            Finalizar Cadastro
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 