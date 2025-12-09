import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Server } from 'lucide-react';
import { SectionId } from '../types';
import { DomainChecker } from './DomainChecker';

export const Hero: React.FC = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Delay video loading to ensure LCP image renders first and TBT is low
    // Increased delay slightly to prioritize main thread for interaction
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden bg-santek-dark">
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* High Performance LCP Image - Replaces CSS background-image */}
        <img 
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop"
            alt="Background Tecnologia e Negócios"
            fetchPriority="high"
            width="1200"
            height="800"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loadVideo ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Overlay Gradients for Readability - Darkened for better A11y Contrast */}
        <div className="absolute inset-0 bg-santek-blue/60 z-10 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-santek-dark via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Deferred YouTube Iframe Background */}
        {loadVideo && (
          <div className="absolute top-1/2 left-1/2 w-[400%] h-[400%] md:w-[200%] md:h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 animate-in fade-in duration-1000">
            <iframe
              className="w-full h-full opacity-40"
              src="https://www.youtube.com/embed/0x5mf8BUJZY?autoplay=1&mute=1&controls=0&loop=1&playlist=0x5mf8BUJZY&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1"
              title="Santek Background Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ border: 'none' }}
              tabIndex={-1}
              aria-hidden="true"
            ></iframe>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8 text-center md:text-left pt-6 md:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-santek-orange/20 border border-santek-orange/50 text-santek-orange px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm"
          >
            <TrendingUp size={16} aria-hidden="true" />
            <span className="animate-pulse">Tráfego Pago & Performance</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Domine o <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white drop-shadow-sm">
              Instagram, Google & Facebook
            </span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-santek-orange to-santek-red">
              Venda Mais.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-lg leading-relaxed font-light mx-auto md:mx-0">
            Gestão profissional de Tráfego Pago, Hospedagem sob medida e Sistemas Web.
            A infraestrutura completa para seu negócio escalar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="group bg-santek-red hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,17,0,0.4)] flex items-center justify-center gap-3"
              aria-label="Solicitar consultoria grátis"
            >
              Consultoria Grátis
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-white/60 flex items-center justify-center"
              aria-label="Ver nossos planos"
            >
              Ver Planos
            </a>
          </div>
        </motion.div>

        {/* Right Side: Domain Checker & Floating Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex flex-col justify-center items-center h-[500px] md:h-[600px]"
        >
           {/* Domain Checker Component */}
           <div className="w-full mb-8 transform hover:scale-105 transition-transform duration-300">
             <DomainChecker />
           </div>

           {/* Floating Info Cards - Hidden on mobile for performance */}
           <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-0 z-10 hidden md:block"
           >
             <div className="bg-gray-950/95 backdrop-blur-md border border-blue-500/50 p-5 rounded-xl shadow-xl w-60">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                        <TrendingUp size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-white font-bold">Ads & SEO</h3>
                </div>
                <p className="text-gray-300 text-xs">Campanhas otimizadas para ROI máximo no Google e Instagram.</p>
             </div>
           </motion.div>

           <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 left-0 z-10 hidden md:block"
           >
             <div className="bg-gray-950/95 backdrop-blur-md border border-orange-500/50 p-5 rounded-xl shadow-xl w-60">
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400">
                        <Server size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-white font-bold">Hospedagem</h3>
                </div>
                <p className="text-gray-300 text-xs">Servidores dedicados e sob medida para sua necessidade.</p>
             </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};