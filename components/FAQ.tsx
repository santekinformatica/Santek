import React, { useState } from 'react';
import { SectionId, FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs: FAQItem[] = [
  {
    question: "Qual deve ser meu orçamento de marketing digital?",
    answer: "O orçamento ideal varia conforme os objetivos da sua empresa e o nicho de mercado. Na Santek, realizamos uma análise inicial gratuita para sugerir um plano de investimento que traga o maior retorno sobre investimento (ROI) possível, começando com valores acessíveis."
  },
  {
    question: "Com quais sites de mídia social você trabalha?",
    answer: "Integramos seu site e sistemas com as principais redes: Instagram, Facebook, LinkedIn, YouTube e WhatsApp Business. Criamos estratégias para que seu site alimente suas redes e vice-versa."
  },
  {
    question: "Qual é o processo de design da marca e sites?",
    answer: "Nosso processo envolve 4 etapas: 1) Briefing e Pesquisa (entender seu negócio), 2) Prototipagem (Wireframes), 3) Design Visual e Desenvolvimento, 4) Testes e Lançamento. O cliente participa aprovando cada etapa."
  },
  {
    question: "Qual é o seu horário de funcionamento?",
    answer: "Atendemos em horário comercial, de Segunda a Sexta das 08h às 18h. Para clientes com contrato de suporte crítico, oferecemos atendimento estendido conforme SLA."
  },
  {
    question: "Vocês atendem apenas em Goiânia?",
    answer: "Nossa sede é em Goiânia-GO, onde realizamos visitas presenciais, mas atendemos clientes de todo o Brasil e exterior através de videoconferências e ferramentas de gestão remota."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={SectionId.FAQ} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
          <p className="text-gray-500 mt-2">Tire suas dúvidas sobre nossos serviços</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition text-left"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? <Minus className="text-santek-red" /> : <Plus className="text-santek-blue" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-gray-50"
                  >
                    <div className="p-5 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};