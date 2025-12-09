import React from 'react';
import { SectionId, ServiceItem } from '../types';
import { Monitor, Smartphone, ShoppingBag, Server, TrendingUp, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: 'ads',
    title: 'Tráfego Pago (Ads)',
    description: 'Gestão especialista em Google Ads, Facebook Ads e Instagram Ads. Campanhas focadas em gerar leads e vendas imediatas.',
    icon: 'TrendingUp'
  },
  {
    id: 'seo',
    title: 'Tráfego Orgânico (SEO)',
    description: 'Otimização completa do seu site para aparecer na primeira página do Google sem pagar por clique. Conteúdo e técnica.',
    icon: 'Search'
  },
  {
    id: 'hospedagem',
    title: 'Hospedagem Sob Medida',
    description: 'Servidores de alta performance configurados especificamente para seu negócio. Segurança, backup e suporte incluso.',
    icon: 'Server'
  },
  {
    id: 'sites',
    title: 'Sites de Alta Conversão',
    description: 'Websites desenvolvidos com foco em vendas. Rápidos, responsivos e preparados para receber suas campanhas de tráfego.',
    icon: 'Monitor'
  },
  {
    id: 'loja',
    title: 'E-commerce',
    description: 'Lojas virtuais integradas com Pix, frete e ERPs. Estrutura robusta para vender 24h por dia.',
    icon: 'ShoppingBag'
  },
  {
    id: 'apps',
    title: 'Aplicativos Mobile',
    description: 'Desenvolvimento de Apps nativos para Android e iOS. Tire sua ideia do papel e coloque na loja.',
    icon: 'Smartphone'
  }
];

const IconMap: Record<string, React.ElementType> = {
  Monitor, Smartphone, ShoppingBag, Server, TrendingUp, Search
};

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-santek-red font-bold uppercase tracking-wide text-sm mb-2">Soluções 360º</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Acelere seu Crescimento</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Da infraestrutura (Hospedagem) à aquisição de clientes (Tráfego). Cuidamos de tudo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-santek-blue transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-santek-blue transition-colors duration-300">
                  <Icon className="w-8 h-8 text-santek-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                {service.id === 'hospedagem' && (
                    <span className="mt-4 inline-block text-xs font-bold text-santek-orange bg-orange-100 px-2 py-1 rounded">
                        A Combinar / Personalizado
                    </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};