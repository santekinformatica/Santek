import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Loader2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DomainChecker: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'available' | 'unavailable' | 'error'>('idle');

  const checkDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    
    // Clean domain
    let cleanDomain = domain.toLowerCase().replace(/https?:\/\//, '').replace(/\//g, '');
    if (!cleanDomain.includes('.')) {
        cleanDomain += '.com.br';
    }

    setStatus('loading');

    try {
      // Frontend Workaround: We use Cloudflare DNS-over-HTTPS to check if a domain resolves.
      // If it returns NXDOMAIN (Status 3), it means the domain *likely* doesn't exist (Available).
      // If it returns NOERROR (Status 0), it exists (Unavailable).
      
      const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${cleanDomain}&type=A`, {
        headers: {
          'Accept': 'application/dns-json'
        }
      });

      const data = await response.json();

      // Status 3 = NXDOMAIN (Non-Existent Domain) -> Available
      // Status 0 = NOERROR -> Unavailable (Registered)
      if (data.Status === 3) {
        setStatus('available');
      } else if (data.Status === 0) {
        setStatus('unavailable');
      } else {
        setStatus('unavailable'); // Conservatively assume unavailable on other codes
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 relative z-30">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2 mb-4 text-white">
                <Globe className="w-5 h-5 text-santek-orange" aria-hidden="true" />
                <h3 className="font-bold text-lg">Verifique se seu domínio está livre</h3>
            </div>
            
            <form onSubmit={checkDomain} className="relative">
                <input 
                    type="text" 
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="suesite.com.br"
                    aria-label="Digite o domínio para verificar"
                    className="w-full pl-4 pr-14 py-4 rounded-xl bg-white text-gray-900 font-bold focus:outline-none focus:ring-4 focus:ring-santek-blue/50 shadow-inner"
                />
                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="absolute right-2 top-2 bottom-2 bg-santek-blue text-white p-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-70"
                    aria-label="Pesquisar disponibilidade de domínio"
                >
                    {status === 'loading' ? <Loader2 className="animate-spin w-6 h-6" aria-hidden="true" /> : <Search className="w-6 h-6" aria-hidden="true" />}
                </button>
            </form>

            <AnimatePresence>
                {status !== 'idle' && status !== 'loading' && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mt-4 p-4 rounded-lg flex items-center justify-between shadow-lg ${
                            status === 'available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}
                        role="alert"
                    >
                        <div className="flex items-center gap-3">
                            {status === 'available' ? <CheckCircle className="w-6 h-6" aria-hidden="true" /> : <XCircle className="w-6 h-6" aria-hidden="true" />}
                            <div>
                                <p className="font-bold text-lg">
                                    {status === 'available' ? 'Domínio Disponível!' : 'Domínio já registrado'}
                                </p>
                                <p className="text-white/80 text-sm">
                                    {status === 'available' 
                                        ? 'Garanta agora sua marca na internet.' 
                                        : 'Tente outra variação ou extensão.'}
                                </p>
                            </div>
                        </div>
                        {status === 'available' && (
                            <a 
                                href="https://wa.me/5562994534667?text=Quero%20registrar%20meu%20dominio" 
                                target="_blank"
                                className="bg-white text-green-600 px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition"
                            >
                                Registrar
                            </a>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
  );
};