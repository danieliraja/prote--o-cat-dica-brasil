import React from 'react';
import { ArrowDownIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="videos/4324072-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <div className="animate-on-scroll is-visible">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Proteção Catódica de Vanguarda
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-8 font-light">
            Blindando o futuro da sua indústria contra a corrosão. Soluções completas para garantir a integridade e longevidade dos seus ativos mais críticos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate-pulse">
              Fale com um Especialista
            </a>
            <a href="#services" className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              Nossos Serviços
            </a>
          </div>
        </div>
        <div 
          className="absolute  animate-on-scroll is-visible"
          style={{ animationDelay: '500ms', bottom: '-250px'}}
        >
          <a href="#services" aria-label="Scroll down">
            <ArrowDownIcon className="h-8 w-8 text-white animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;