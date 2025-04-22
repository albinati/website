// List of major Brazilian cities with their respective states
export const brazilianCities = [
  { name: "São Paulo", state: "SP" },
  { name: "Rio de Janeiro", state: "RJ" },
  { name: "Brasília", state: "DF" },
  { name: "Salvador", state: "BA" },
  { name: "Fortaleza", state: "CE" },
  { name: "Belo Horizonte", state: "MG" },
  { name: "Manaus", state: "AM" },
  { name: "Curitiba", state: "PR" },
  { name: "Recife", state: "PE" },
  { name: "Porto Alegre", state: "RS" },
  { name: "Belém", state: "PA" },
  { name: "Goiânia", state: "GO" },
  { name: "Guarulhos", state: "SP" },
  { name: "Campinas", state: "SP" },
  { name: "São Luís", state: "MA" },
  { name: "São Gonçalo", state: "RJ" },
  { name: "Maceió", state: "AL" },
  { name: "Duque de Caxias", state: "RJ" },
  { name: "Natal", state: "RN" },
  { name: "Teresina", state: "PI" },
  { name: "São Bernardo do Campo", state: "SP" },
  { name: "Campo Grande", state: "MS" },
  { name: "Osasco", state: "SP" },
  { name: "Santo André", state: "SP" },
  { name: "João Pessoa", state: "PB" },
  { name: "Jaboatão dos Guararapes", state: "PE" },
  { name: "Contagem", state: "MG" },
  { name: "São José dos Campos", state: "SP" },
  { name: "Ribeirão Preto", state: "SP" },
  { name: "Uberlândia", state: "MG" },
  { name: "Sorocaba", state: "SP" },
  { name: "Aracaju", state: "SE" },
  { name: "Feira de Santana", state: "BA" },
  { name: "Cuiabá", state: "MT" },
  { name: "Juiz de Fora", state: "MG" },
  { name: "Joinville", state: "SC" },
  { name: "Londrina", state: "PR" },
  { name: "Niterói", state: "RJ" },
  { name: "Ananindeua", state: "PA" },
  { name: "Belford Roxo", state: "RJ" },
  { name: "Campos dos Goytacazes", state: "RJ" },
  { name: "São João de Meriti", state: "RJ" },
  { name: "Aparecida de Goiânia", state: "GO" },
  { name: "Caxias do Sul", state: "RS" },
  { name: "Florianópolis", state: "SC" },
  { name: "Vila Velha", state: "ES" },
  { name: "Serra", state: "ES" },
  { name: "Diadema", state: "SP" },
  { name: "Carapicuíba", state: "SP" },
  { name: "Mauá", state: "SP" }
];

// Helper function to search cities
export const searchCities = (query: string) => {
  if (!query || query.length < 2) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  return brazilianCities
    .filter(city => 
      city.name.toLowerCase().includes(lowercaseQuery) ||
      `${city.name}, ${city.state}`.toLowerCase().includes(lowercaseQuery)
    )
    .slice(0, 10); // Limit to 10 results
}; 