import React from 'react';
import { BeakerIcon, ChartBarIcon, CogIcon, MagnifyingGlassIcon } from './icons';

const services = [
  {
    icon: <MagnifyingGlassIcon className="h-10 w-10 text-blue-600 mb-4" />,
    title: 'Inspeção e Monitoramento',
    description: 'Avaliação detalhada e contínua de sistemas para garantir a máxima eficiência e detecção precoce de falhas.',
  },
  {
    icon: <CogIcon className="h-10 w-10 text-blue-600 mb-4" />,
    title: 'Projetos Personalizados',
    description: 'Desenvolvimento de sistemas de proteção catódica sob medida para as necessidades específicas de cada cliente e estrutura.',
  },
  {
    icon: <BeakerIcon className="h-10 w-10 text-blue-600 mb-4" />,
    title: 'Instalação e Manutenção',
    description: 'Equipes especializadas para a implementação e manutenção de sistemas, assegurando performance e durabilidade.',
  },
  {
    icon: <ChartBarIcon className="h-10 w-10 text-blue-600 mb-4" />,
    title: 'Análise de Corrosão',
    description: 'Diagnóstico preciso das causas da corrosão e elaboração de relatórios técnicos completos para tomada de decisão.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start animate-on-scroll"
    style={{'--animation-delay': `${delay}ms`} as React.CSSProperties}
  >
    {icon}
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Nossas Soluções Completas</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Tecnologia e expertise para proteger seus ativos contra a corrosão.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;