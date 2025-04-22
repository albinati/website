'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiDollarSign, FiCheck, FiWifi } from 'react-icons/fi';
import CityAutocomplete from './CityAutocomplete';

export default function QuickSearchForm() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState([500, 2000]);
  const [cashOnly, setCashOnly] = useState(false);
  const [includeRemote, setIncludeRemote] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Montar parâmetros de consulta
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    params.append('minSalary', salaryRange[0].toString());
    params.append('maxSalary', salaryRange[1].toString());
    if (cashOnly) params.append('cashOnly', 'true');
    params.append('includeRemote', includeRemote.toString());

    // Simular carregamento
    setTimeout(() => {
      router.push(`/resultados?${params.toString()}`);
      setIsLoading(false);
    }, 500);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSalaryRange([salaryRange[0], value]);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        Encontre seu próximo plantão
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Localização com Autocomplete */}
        <CityAutocomplete
          value={location}
          onChange={setLocation}
          label="Localização"
          placeholder="Digite uma cidade (ex: São Paulo, SP)"
          helpText="Busque por cidade para encontrar plantões próximos"
          id="location"
          name="location"
        />

        {/* Faixa Salarial */}
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="salary" className="label">
              Faixa Salarial (por plantão)
            </label>
            <span className="text-sm font-medium text-gray-700">
              R$ {salaryRange[1].toLocaleString('pt-BR')}
            </span>
          </div>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiDollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="range"
              id="salary"
              min="500"
              max="5000"
              step="100"
              value={salaryRange[1]}
              onChange={handleSalaryChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer pl-10 mt-3"
            />
          </div>
        </div>

        {/* Opções adicionais - grupo */}
        <div className="space-y-2 pt-2">
          {/* Incluir plantões remotos */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeRemote"
              checked={includeRemote}
              onChange={(e) => setIncludeRemote(e.target.checked)}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="includeRemote" className="ml-2 flex items-center text-sm text-gray-700">
              <FiWifi className="mr-1 text-gray-500" size={16} />
              Incluir plantões remotos (telemedicina)
            </label>
          </div>

          {/* Pagamento à Vista */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cashOnly"
              checked={cashOnly}
              onChange={(e) => setCashOnly(e.target.checked)}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="cashOnly" className="ml-2 block text-sm text-gray-700">
              Somente pagamentos à vista
            </label>
          </div>
        </div>

        {/* Botão de Busca */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full btn ${
            isLoading ? 'bg-gray-400' : 'btn-primary'
          } flex items-center justify-center`}
        >
          {isLoading ? (
            <span className="loading">Buscando...</span>
          ) : (
            <>
              <FiSearch className="mr-2" />
              Buscar Plantões
            </>
          )}
        </button>
      </form>
    </div>
  );
} 