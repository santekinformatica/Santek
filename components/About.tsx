import React from 'react';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe Santek" 
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-santek-blue rounded-xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-santek-orange/20 rounded-full -z-0"></div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-santek-blue font-bold tracking-wide uppercase text-sm">Sobre Nós</h2>
            <h3 className="text-4xl font-bold text-gray-900">
              Transformando Ideias em <span className="text-santek-red">Soluções Reais</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              A <strong>Santek Soluções em Tecnologias</strong> não é apenas uma desenvolvedora de software. Somos parceiros estratégicos do seu negócio. Com uma equipe de analistas de sistemas e consultores experientes, atuamos de forma presencial em Goiânia e online para todo o mundo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nosso foco é desenvolver plataformas do zero que sejam eficazes, escaláveis e projetadas para fazer sua empresa deslanchar na internet.
            </p>

            <ul className="space-y-3 pt-4">
              {[
                "Equipe Multidisciplinar Especializada",
                "Atendimento Personalizado (Presencial e Online)",
                "Foco em Resultado e Performance",
                "Tecnologias de Ponta"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-santek-orange w-6 h-6" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a href="#contact" className="text-santek-blue font-bold border-b-2 border-santek-red hover:text-santek-red transition pb-1">
                Saiba mais sobre nossa história &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};