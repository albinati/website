'use client';

import { useState, useEffect, useRef } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { searchCities } from '@/data/brazilianCities';

type CityAutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
  label?: string;
  className?: string;
  helpText?: string;
};

export default function CityAutocomplete({
  value,
  onChange,
  placeholder = 'Digite uma cidade',
  id = 'city',
  name = 'city',
  required = false,
  label,
  className = '',
  helpText,
}: CityAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<Array<{ name: string; state: string }>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);
  const suggestionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Update internal state when prop value changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Handle outside clicks to close the suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHasSearched(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length >= 2) {
      const results = searchCities(value);
      setSuggestions(results);
      setIsOpen(true);
      setHasSearched(true);
      setCursor(-1);
    } else {
      setSuggestions([]);
      setIsOpen(false);
      setHasSearched(false);
    }
  };

  // Handle selection of a suggestion
  const handleSelect = (city: { name: string; state: string }) => {
    const selectedValue = `${city.name}, ${city.state}`;
    setQuery(selectedValue);
    onChange(selectedValue);
    setSuggestions([]);
    setIsOpen(false);
    setHasSearched(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow up/down to navigate suggestions
    if (e.key === 'ArrowDown' && isOpen && suggestions.length > 0) {
      e.preventDefault();
      setCursor(c => Math.min(c + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp' && isOpen && suggestions.length > 0) {
      e.preventDefault();
      setCursor(c => Math.max(c - 1, -1));
    } else if (e.key === 'Enter' && cursor >= 0) {
      e.preventDefault();
      handleSelect(suggestions[cursor]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHasSearched(false);
    }
  };

  // Scroll selected suggestion into view
  useEffect(() => {
    if (cursor >= 0 && suggestionRefs.current[cursor]) {
      suggestionRefs.current[cursor]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [cursor]);

  // Handle manual user input without selection
  const handleBlur = () => {
    // If user typed something but didn't select from dropdown
    if (query && query !== value) {
      onChange(query);
    }
    
    // Delay closing to allow click on suggestion
    setTimeout(() => {
      setIsOpen(false);
      setHasSearched(false);
    }, 200);
  };

  return (
    <div className={className} ref={wrapperRef}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiMapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          id={id}
          name={name}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onFocus={() => {
            if (query.length >= 2) {
              const results = searchCities(query);
              setSuggestions(results);
              setIsOpen(results.length > 0);
              setHasSearched(true);
            }
          }}
          placeholder={placeholder}
          required={required}
          className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
      </div>
      
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white shadow-lg rounded-md mt-1 max-h-60 overflow-y-auto">
          {suggestions.length > 0 ? (
            suggestions.map((city, index) => (
              <li
                key={`${city.name}-${city.state}`}
                ref={(el) => {
                  suggestionRefs.current[index] = el;
                }}
                onClick={() => handleSelect(city)}
                className={`px-4 py-2 cursor-pointer hover:bg-light-gray ${
                  cursor === index ? 'bg-light-gray' : ''
                }`}
              >
                {city.name}, {city.state}
              </li>
            ))
          ) : (
            hasSearched && (
              <li className="px-4 py-3 text-gray-500 text-sm italic">
                Nenhuma cidade encontrada. Continue digitando ou use o formato "Cidade, UF"
              </li>
            )
          )}
        </ul>
      )}
      
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
} 