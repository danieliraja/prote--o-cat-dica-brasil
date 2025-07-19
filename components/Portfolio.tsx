import React from 'react';

const projects = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661964136447-676beb97b303?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Óleo & Gás',
    title: 'Proteção de Dutos em Refinaria',
    description: 'Implementação de sistema de corrente impressa para dutos enterrados, aumentando a vida útil em mais de 25 anos e garantindo a segurança operacional.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661964136447-676beb97b303?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Naval & Offshore',
    title: 'Sistema para Plataforma Marítima',
    description: 'Projeto e instalação de anodos galvânicos em estrutura de plataforma offshore para combater a corrosão em ambiente marinho severo.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661964136447-676beb97b303?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Saneamento',
    title: 'Rede de Adutoras de Água',
    description: 'Proteção catódica para grandes adutoras e redes de distribuição de água, assegurando a qualidade e a integridade do sistema de saneamento.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661964136447-676beb97b303?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Infraestrutura',
    title: 'Gasoduto de Longa Distância',
    description: 'Aplicação de sistema de proteção catódica em gasoduto que atravessa múltiplos terrenos, mitigando a corrosão e garantindo o transporte seguro.'
  }
];

const PortfolioCard: React.FC<typeof projects[0] & { delay: number }> = ({ image, category, title, description, delay }) => (
    <div 
      className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl animate-on-scroll"
      style={{'--animation-delay': `${delay}ms`} as React.CSSProperties}
    >
        <div className="relative overflow-hidden">
            <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>
        <div className="p-6">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{category}</p>
            <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Nosso Portfólio de Sucesso</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Projetos que demonstram nossa expertise e compromisso com a qualidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;