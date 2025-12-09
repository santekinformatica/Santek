import React, { useState } from 'react';
import { SectionId } from '../types';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend api
    alert("Obrigado! Recebemos sua mensagem e entraremos em contato em breve.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-santek-dark text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-santek-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-santek-orange font-bold uppercase tracking-wide text-sm mb-2">Fale Conosco</h2>
              <h3 className="text-4xl font-bold mb-4">Entre em contato</h3>
              <p className="text-gray-400">Pronto para iniciar seu projeto? Fale com um de nossos consultores.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="text-santek-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Localização</h4>
                  <p className="text-gray-400">Goiânia - GO, Brasil</p>
                  <p className="text-sm text-gray-500">Atendimento presencial e online</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="text-santek-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-mail</h4>
                  <a href="mailto:contato@santek.dev.br" className="text-gray-400 hover:text-white transition">
                    contato@santek.dev.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="text-santek-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefone / WhatsApp</h4>
                  <a href="tel:+5562994534667" className="text-gray-400 hover:text-white transition">
                    (62) 99453-4667
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Clock className="text-santek-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Funcionamento</h4>
                  <p className="text-gray-400">Horário Comercial</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-santek-blue focus:border-transparent outline-none transition bg-gray-50"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-santek-blue focus:border-transparent outline-none transition bg-gray-50"
                    placeholder="(62) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-santek-blue focus:border-transparent outline-none transition bg-gray-50"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-santek-blue focus:border-transparent outline-none transition bg-gray-50"
                  placeholder="Conte um pouco sobre seu projeto..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-santek-blue hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
              >
                Enviar Mensagem <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};