import React from 'react';
import { StarIcon, QuoteIcon } from './icons';

const testimonials = [
  {
    quote: "A parceria com a Proteção Catódica BR foi um divisor de águas para nossa operação. A expertise técnica e o profissionalismo da equipe garantiram uma solução robusta que já está nos gerando economia.",
    name: 'Carlos Andrade',
    company: 'Gerente de Manutenção, Petro Indústria S.A.',
    stars: 5,
  },
  {
    quote: "Desde o projeto até a instalação, o serviço foi impecável. Eles entenderam nossas necessidades e entregaram um sistema de proteção catódica sob medida que superou nossas expectativas em performance e segurança.",
    name: 'Juliana Vasconcelos',
    company: 'Diretora de Engenharia, Saneamento Urbano Ltda.',
    stars: 5,
  },
   {
    quote: "A equipe de monitoramento é extremamente proativa. O nível de detalhe nos relatórios e a agilidade na resposta a qualquer anomalia nos dá a tranquilidade de que nossos ativos estão verdadeiramente protegidos.",
    name: 'Ricardo Neves',
    company: 'Coordenador de Integridade, Logística Portuária',
    stars: 5,
  },
];

const TestimonialCard: React.FC<typeof testimonials[0] & { delay: number }> = ({ quote, name, company, stars, delay }) => (
  <div 
    className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full animate-on-scroll"
    style={{'--animation-delay': `${delay}ms`} as React.CSSProperties}
  >
    <QuoteIcon className="h-8 w-8 text-blue-200 mb-4" />
    <p className="text-slate-600 italic mb-6 flex-grow">"{quote}"</p>
    <div>
        <div className="flex items-center mb-2">
            {[...Array(stars)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
            ))}
        </div>
        <p className="font-bold text-slate-800">{name}</p>
        <p className="text-sm text-slate-500">{company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">O que Nossos Clientes Dizem</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">A confiança que construímos é o nosso maior ativo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
