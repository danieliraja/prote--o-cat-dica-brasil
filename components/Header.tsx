import React from 'react';
import { ShieldCheckIcon } from './icons';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <ShieldCheckIcon className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white tracking-tight">Proteção Catódica BR</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-300 hover:text-white' : 'text-white hover:text-slate-200'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Solicitar Orçamento
          </a>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;