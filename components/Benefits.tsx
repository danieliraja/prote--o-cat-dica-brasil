import React from 'react';
import { CurrencyDollarIcon, ShieldCheckIcon, SparklesIcon, ScaleIcon } from './icons';

const benefits = [
  {
    icon: <CurrencyDollarIcon className="h-7 w-7 text-blue-600" />,
    title: 'Redução de Custos',
    description: 'Evite gastos com reparos e substituições dispendiosas causadas pela corrosão.',
  },
  {
    icon: <ShieldCheckIcon className="h-7 w-7 text-blue-600" />,
    title: 'Aumento da Segurança Operacional',
    description: 'Previna falhas estruturais que podem levar a acidentes e paralisações.',
  },
  {
    icon: <SparklesIcon className="h-7 w-7 text-blue-600" />,
    title: 'Extensão da Vida Útil dos Ativos',
    description: 'Maximize o retorno sobre o investimento prolongando a durabilidade de suas instalações.',
  },
  {
    icon: <ScaleIcon className="h-7 w-7 text-blue-600" />,
    title: 'Conformidade com Normas',
    description: 'Garanta que suas operações estejam em conformidade com as regulamentações técnicas e ambientais.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Vantagens que Protegem seu Investimento</h2>
              <p className="text-lg text-slate-600 mt-4">Nossas soluções de proteção catódica oferecem benefícios tangíveis para sua operação.</p>
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 animate-on-scroll" style={{'--animation-delay': `200ms`} as React.CSSProperties}>
            <img 
              src="https://images.unsplash.com/photo-1621944519912-85018d79677e?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Industrial pipeline with cathodic protection system" 
              className="rounded-xl shadow-2xl w-full h-full object-cover max-h-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;