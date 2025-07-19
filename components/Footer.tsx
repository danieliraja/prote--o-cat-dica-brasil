
import React from 'react';
import { ShieldCheckIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <ShieldCheckIcon className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-slate-200">Proteção Catódica BR</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Proteção Catódica Brasil. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
