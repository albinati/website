'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FiFilter, FiX, FiMapPin, FiDollarSign, FiClock, 
  FiCalendar, FiPhone, FiLock, FiSliders
} from 'react-icons/fi';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Tipos
type Opportunity = {
  id: string;
  title: string;
  location: string;
  latitude?: number;
  longitude?: number;
  salary: number;
  isCashPayment: boolean;
  specialty: string;
  shiftType: string; // "EMERGENCY", "CLINIC", etc.
  date: string;
  duration?: number;
  contactName?: string;
  contactNumber: string;
  agencyName?: string;
  createdAt: string;
};

export default function ResultadosPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Parâmetros da busca
  const location = searchParams.get('location') || '';
  const minSalary = parseInt(searchParams.get('minSalary') || '500');
  const maxSalary = parseInt(searchParams.get('maxSalary') || '5000');
  const cashOnly = searchParams.get('cashOnly') === 'true';

  // Estado para filtros adicionais
  const [filteredResults, setFilteredResults] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filtros adicionais
  const [filters, setFilters] = useState({
    specialty: '',
    shiftType: '',
    datePosted: '', // "today", "3days", "week", "all"
  });

  const specialtyOptions = [
    { value: '', label: 'Todas especialidades' },
    { value: 'CLINICA_GERAL', label: 'Clínica Geral' },
    { value: 'EMERGENCIA', label: 'Emergência' },
    { value: 'PEDIATRIA', label: 'Pediatria' },
    { value: 'GINECOLOGIA', label: 'Ginecologia' },
    { value: 'ORTOPEDIA', label: 'Ortopedia' },
    { value: 'CARDIOLOGIA', label: 'Cardiologia' },
    { value: 'UTI', label: 'UTI' },
  ];

  const shiftTypeOptions = [
    { value: '', label: 'Todos tipos' },
    { value: 'EMERGENCY', label: 'Emergência' },
    { value: 'CLINIC', label: 'Clínica' },
    { value: 'HOSPITAL', label: 'Hospital' },
    { value: 'HOMECARE', label: 'Homecare' },
    { value: 'TELEHEALTH', label: 'Telemedicina' },
  ];

  const datePostedOptions = [
    { value: '', label: 'Qualquer data' },
    { value: 'today', label: 'Hoje' },
    { value: '3days', label: 'Últimos 3 dias' },
    { value: 'week', label: 'Última semana' },
  ];

  // Dados simulados - em produção viriam da API
  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      
      // Simular chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Dados simulados
      const mockOpportunities: Opportunity[] = [
        {
          id: '1',
          title: 'Plantão Clínica Geral',
          location: 'São Paulo, SP',
          salary: 1200,
          isCashPayment: true,
          specialty: 'CLINICA_GERAL',
          shiftType: 'CLINIC',
          date: '2023-05-20T14:00:00Z',
          duration: 12,
          contactName: 'Maria Silva',
          contactNumber: '11******45', // Mascarado
          agencyName: 'Hospital Samaritano',
          createdAt: '2023-05-18T10:30:00Z',
        },
        {
          id: '2',
          title: 'Emergência 12h',
          location: 'Rio de Janeiro, RJ',
          salary: 1500,
          isCashPayment: false,
          specialty: 'EMERGENCIA',
          shiftType: 'EMERGENCY',
          date: '2023-05-21T08:00:00Z',
          duration: 12,
          contactName: 'João Souza',
          contactNumber: '21******78', // Mascarado
          agencyName: 'Clínica São Lucas',
          createdAt: '2023-05-18T14:20:00Z',
        },
        {
          id: '3',
          title: 'UTI Adulto',
          location: 'São Paulo, SP',
          salary: 1800,
          isCashPayment: true,
          specialty: 'UTI',
          shiftType: 'HOSPITAL',
          date: '2023-05-22T19:00:00Z',
          duration: 12,
          contactName: 'Ana Paula',
          contactNumber: '11******36', // Mascarado
          agencyName: 'Hospital Albert Einstein',
          createdAt: '2023-05-19T09:15:00Z',
        },
        {
          id: '4',
          title: 'Pronto Atendimento',
          location: 'Campinas, SP',
          salary: 1300,
          isCashPayment: false,
          specialty: 'CLINICA_GERAL',
          shiftType: 'EMERGENCY',
          date: '2023-05-23T07:00:00Z',
          duration: 6,
          contactName: 'Roberto Alves',
          contactNumber: '19******21', // Mascarado
          agencyName: 'UPA Campinas',
          createdAt: '2023-05-19T16:40:00Z',
        },
        {
          id: '5',
          title: 'Clínica Médica',
          location: 'São Paulo, SP',
          salary: 900,
          isCashPayment: true,
          specialty: 'CLINICA_GERAL',
          shiftType: 'CLINIC',
          date: '2023-05-24T13:00:00Z',
          duration: 8,
          contactName: 'Fernanda Lima',
          contactNumber: '11******90', // Mascarado
          agencyName: 'Centro Médico Paulista',
          createdAt: '2023-05-20T08:10:00Z',
        },
      ];

      // Filtro para match com a localização (se houver)
      const filteredByLocation = location 
        ? mockOpportunities.filter(op => op.location.toLowerCase().includes(location.toLowerCase()))
        : mockOpportunities;

      // Filtro por faixa salarial
      const filteredBySalary = filteredByLocation.filter(
        op => op.salary >= minSalary && op.salary <= maxSalary
      );

      // Filtro por pagamento à vista (se selecionado)
      const filteredByCash = cashOnly 
        ? filteredBySalary.filter(op => op.isCashPayment) 
        : filteredBySalary;

      setFilteredResults(filteredByCash);
      setIsLoading(false);
    };

    fetchResults();
  }, [location, minSalary, maxSalary, cashOnly]);

  // Aplicar filtros adicionais
  useEffect(() => {
    if (isLoading) return;

    let results = filteredResults;

    // Filtro por especialidade
    if (filters.specialty) {
      results = results.filter(op => op.specialty === filters.specialty);
    }

    // Filtro por tipo de plantão
    if (filters.shiftType) {
      results = results.filter(op => op.shiftType === filters.shiftType);
    }

    // Filtro por data de postagem
    if (filters.datePosted) {
      const now = new Date();
      let cutoffDate = new Date();
      
      if (filters.datePosted === 'today') {
        cutoffDate.setHours(0, 0, 0, 0);
      } else if (filters.datePosted === '3days') {
        cutoffDate.setDate(cutoffDate.getDate() - 3);
      } else if (filters.datePosted === 'week') {
        cutoffDate.setDate(cutoffDate.getDate() - 7);
      }
      
      results = results.filter(op => new Date(op.createdAt) >= cutoffDate);
    }

    setFilteredResults(results);
  }, [filters, isLoading]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      specialty: '',
      shiftType: '',
      datePosted: '',
    });
  };

  // Formatação de data para exibição
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Formatação de preço em reais
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <>
      <Header />
      <main className="bg-light-gray min-h-screen">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-5 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800">Filtros</h3>
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    <FiX size={14} className="mr-1" /> Limpar
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Filtro por Especialidade */}
                  <div>
                    <label htmlFor="specialty" className="label">Especialidade</label>
                    <select
                      id="specialty"
                      name="specialty"
                      value={filters.specialty}
                      onChange={handleFilterChange}
                      className="input"
                    >
                      {specialtyOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Filtro por Tipo de Plantão */}
                  <div>
                    <label htmlFor="shiftType" className="label">Tipo de Plantão</label>
                    <select
                      id="shiftType"
                      name="shiftType"
                      value={filters.shiftType}
                      onChange={handleFilterChange}
                      className="input"
                    >
                      {shiftTypeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Filtro por Data de Postagem */}
                  <div>
                    <label htmlFor="datePosted" className="label">Data de Postagem</label>
                    <select
                      id="datePosted"
                      name="datePosted"
                      value={filters.datePosted}
                      onChange={handleFilterChange}
                      className="input"
                    >
                      {datePostedOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Area */}
            <div className="flex-1">
              {/* Search Summary and Mobile Filter Button */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-bold text-gray-800">
                    {filteredResults.length} {filteredResults.length === 1 ? 'resultado' : 'resultados'} encontrados
                  </h1>
                  {location && (
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <FiMapPin size={14} className="mr-1" />
                      Localização: {location}
                    </p>
                  )}
                </div>

                {/* Mobile Filter Button */}
                <button
                  className="md:hidden btn btn-sm btn-outline flex items-center"
                  onClick={toggleMobileFilters}
                >
                  <FiFilter size={16} className="mr-1" />
                  Filtros
                </button>
              </div>

              {/* Mobile Filters */}
              {mobileFiltersOpen && (
                <div className="md:hidden bg-white rounded-lg shadow-md p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800">Filtros</h3>
                    <button
                      onClick={toggleMobileFilters}
                      className="text-gray-500"
                    >
                      <FiX size={20} />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Filtro por Especialidade */}
                    <div>
                      <label htmlFor="mobile-specialty" className="label">Especialidade</label>
                      <select
                        id="mobile-specialty"
                        name="specialty"
                        value={filters.specialty}
                        onChange={handleFilterChange}
                        className="input"
                      >
                        {specialtyOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Filtro por Tipo de Plantão */}
                    <div>
                      <label htmlFor="mobile-shiftType" className="label">Tipo de Plantão</label>
                      <select
                        id="mobile-shiftType"
                        name="shiftType"
                        value={filters.shiftType}
                        onChange={handleFilterChange}
                        className="input"
                      >
                        {shiftTypeOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Filtro por Data de Postagem */}
                    <div>
                      <label htmlFor="mobile-datePosted" className="label">Data de Postagem</label>
                      <select
                        id="mobile-datePosted"
                        name="datePosted"
                        value={filters.datePosted}
                        onChange={handleFilterChange}
                        className="input"
                      >
                        {datePostedOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <button 
                        onClick={resetFilters}
                        className="btn btn-sm btn-outline flex-1"
                      >
                        Limpar
                      </button>
                      <button 
                        onClick={toggleMobileFilters}
                        className="btn btn-sm btn-primary flex-1"
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Results List */}
              {isLoading ? (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-gray-600">Carregando oportunidades...</p>
                </div>
              ) : filteredResults.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-lg font-semibold mb-2">Nenhum resultado encontrado</h3>
                  <p className="text-gray-600 mb-4">
                    Tente ajustar seus filtros ou ampliar sua busca para encontrar mais oportunidades.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="btn btn-primary"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredResults.map((opportunity) => (
                    <div key={opportunity.id} className="job-card bg-white">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <h2 className="text-lg font-bold text-gray-800">{opportunity.title}</h2>
                          
                          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex items-center text-sm text-gray-600">
                              <FiMapPin className="mr-1 flex-shrink-0" size={14} />
                              <span>{opportunity.location}</span>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-600">
                              <FiCalendar className="mr-1 flex-shrink-0" size={14} />
                              <span>{formatDate(opportunity.date)}</span>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-600">
                              <FiClock className="mr-1 flex-shrink-0" size={14} />
                              <span>{opportunity.duration}h</span>
                            </div>
                            
                            <div className="flex items-center text-sm font-medium text-primary">
                              <FiDollarSign className="mr-1 flex-shrink-0" size={14} />
                              <span>
                                {formatCurrency(opportunity.salary)}
                                {opportunity.isCashPayment && 
                                  <span className="ml-1 text-xs font-normal text-green-600">(à vista)</span>
                                }
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="badge badge-blue">
                              {specialtyOptions.find(opt => opt.value === opportunity.specialty)?.label || opportunity.specialty}
                            </span>
                            <span className="badge badge-yellow">
                              {shiftTypeOptions.find(opt => opt.value === opportunity.shiftType)?.label || opportunity.shiftType}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-start md:items-end">
                          <p className="text-sm text-gray-600 mb-2">
                            Contato: {opportunity.contactName || 'Agência'}
                          </p>
                          
                          <div className="flex items-center">
                            <span className="text-gray-500 mr-2">
                              {opportunity.contactNumber}
                            </span>
                            <Link
                              href="/login"
                              className="btn btn-sm btn-primary flex items-center"
                            >
                              <FiLock size={14} className="mr-1" />
                              Ver contato
                            </Link>
                          </div>
                          
                          <p className="text-xs text-gray-500 mt-2">
                            {opportunity.agencyName}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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