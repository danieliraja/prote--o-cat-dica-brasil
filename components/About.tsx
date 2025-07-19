import React from 'react';
import { CalendarDaysIcon, BuildingOffice2Icon, UserGroupIcon } from './icons';

const stats = [
  {
    icon: <CalendarDaysIcon className="h-10 w-10 text-blue-500" />,
    value: '15+',
    label: 'Anos no Mercado',
  },
  {
    icon: <BuildingOffice2Icon className="h-10 w-10 text-blue-500" />,
    value: '500+',
    label: 'Projetos Concluídos',
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-blue-500" />,
    value: '99%',
    label: 'Satisfação dos Clientes',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Nosso Compromisso com a Excelência</h2>
          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              Somos líderes em soluções de proteção catódica no Brasil, dedicados a proteger seus ativos mais valiosos contra a corrosão com uma combinação imbatível de <span className="font-semibold text-blue-600">tecnologia de ponta</span>, <span className="font-semibold text-blue-600">expertise técnica</span> e <span className="font-semibold text-blue-600">responsabilidade</span>. Nossa missão é ser o parceiro de confiança que garante a integridade e a performance contínua da sua infraestrutura, hoje e no futuro.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center animate-on-scroll"
              style={{'--animation-delay': `${index * 150}ms`} as React.CSSProperties}
            >
              {stat.icon}
              <p className="text-4xl font-extrabold text-slate-800 mt-4">{stat.value}</p>
              <p className="text-slate-500 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;