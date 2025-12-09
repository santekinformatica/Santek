import React from 'react';
import { SantekTextLogo } from './SantekLogo';
import { Facebook, Instagram, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <div className="bg-white w-fit px-4 py-2 rounded-lg">
                <SantekTextLogo className="h-16" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Somos especialistas em transformar negócios através da tecnologia. Desenvolvimento de alta performance para resultados reais.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-santek-orange transition hover:underline">Home</a></li>
              <li><a href="#about" className="hover:text-santek-orange transition hover:underline">Sobre</a></li>
              <li><a href="#services" className="hover:text-santek-orange transition hover:underline">Serviços</a></li>
              <li><a href="#contact" className="hover:text-santek-orange transition hover:underline">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-santek-orange transition hover:underline">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-santek-orange transition hover:underline">Aplicativos Mobile</a></li>
              <li><a href="#" className="hover:text-santek-orange transition hover:underline">Sistemas CRM</a></li>
              <li><a href="#" className="hover:text-santek-orange transition hover:underline">Marketing Digital</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-santek-blue transition text-white" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-santek-blue transition text-white" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-santek-blue transition text-white" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-santek-blue transition text-white" aria-label="Website"><Globe size={20} /></a>
            </div>
            <div className="mt-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Receba Novidades</p>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="email-newsletter" className="sr-only">Seu e-mail</label>
                    <input id="email-newsletter" type="email" placeholder="Seu e-mail" className="bg-gray-800 text-white text-sm px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-santek-blue w-full border border-gray-700" />
                    <button type="submit" className="bg-santek-red px-3 py-2 rounded-r-md text-sm font-bold hover:bg-red-700 transition text-white">OK</button>
                </form>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Santek Soluções em Tecnologias. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};