import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual inteligente da Santek Soluções em Tecnologias.
Seu objetivo é ajudar potenciais clientes a entenderem como escalar seus negócios.

FOCO PRINCIPAL:
1. GESTÃO DE TRÁFEGO PAGO: Especialistas em Google Ads, Facebook Ads e Instagram Ads. Otimização de ROI.
2. HOSPEDAGEM: Servidores sob medida, alta velocidade e segurança.
3. DOMÍNIOS: Ajuda na escolha e registro.

Informações da Santek:
- Localização: Goiânia-GO.
- Contato: (62) 99453-4667 | contato@santek.dev.br.
- Serviços Extras: Desenvolvimento Web e Apps.

Responda de forma curta, persuasiva e comercial. Se o cliente perguntar sobre "preço" ou "orçamento", explique que a hospedagem é sob medida e peça para chamar no WhatsApp.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  if (!apiKey) {
    return "Desculpe, o sistema de IA está temporariamente indisponível (Chave API não configurada). Por favor, entre em contato via WhatsApp.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "Ocorreu um erro na comunicação. Por favor, tente novamente ou use nosso WhatsApp.";
  }
};