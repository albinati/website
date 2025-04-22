'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary text-xl font-bold mr-1">Caça</span>
              <span className="text-secondary text-xl font-bold">Plantão</span>
            </Link>
          </div>

          {/* Desktop Navigation - Removido, deixando apenas o logo */}
          <div className="flex-grow"></div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-600 hover:text-primary"
            >
              Entrar
            </Link>
            <Link 
              href="/registro" 
              className="btn btn-secondary btn-sm"
            >
              Criar Conta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-4">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-3 px-5">
              <Link 
                href="/login" 
                className="text-base font-medium text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link 
                href="/registro" 
                className="btn btn-secondary btn-sm w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 