import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] =useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">Pronto para Proteger Seus Ativos?</h2>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">Entre em contato e solicite um orçamento sem compromisso. Nossa equipe está pronta para ajudar.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="lg:w-1/2 w-full animate-on-scroll" style={{'--animation-delay': '200ms'} as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-4 text-white">Informações de Contato</h3>
              <p className="text-slate-300 mb-6">Prefere nos ligar ou visitar? Aqui estão nossos detalhes. Estamos ansiosos para ouvir de você.</p>
              <div className="space-y-4">
                  <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span className="text-slate-200">Av. Industrial, 123, São Paulo, SP, Brasil</span>
                  </div>
                  <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      <span className="text-slate-200">contato@protecaocathodicabr.com.br</span>
                  </div>
                  <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <span className="text-slate-200">+55 (11) 98765-4321</span>
                  </div>
              </div>
          </div>
          <div className="lg:w-1/2 w-full bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-sm animate-on-scroll">
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-cyan-300">Obrigado!</h3>
                <p className="mt-2 text-slate-200">Sua mensagem foi enviada. Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nome Completo</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-600 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-600 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Mensagem</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-600 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-blue-500">
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;