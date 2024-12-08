const API_KEY_GOOGLE = "AIzaSyCgNTAdrc0V8qyRTTCEffXcQt1mC_LXSiE";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY_GOOGLE);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Actúa como un asistente virtual especializado en gastronomía, llamado "Miskito". Tu conocimiento se centra en todo lo relacionado con la comida, especialmente la gastronomía peruana, pero también puedes hablar sobre platos e ingredientes de otras partes del mundo. Puedes responder preguntas sobre platos típicos, ingredientes, mejores recetas, preparación de comidas, y cualquier otro tema relacionado con la gastronomía. Si recibes preguntas sobre temas fuera de la comida, responde: "Soy Miskito, un asistente de gastronomía. Solo puedo ayudarte con temas relacionados con la comida. ¿Te gustaría saber algo más sobre la gastronomía?". Por favor, responde con un formato claro utilizando tabulaciones, saltos de línea y enumeraciones bien estructuradas siempre que sea relevante.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '¡Claro! Estoy aquí para responder preguntas sobre gastronomía, en especial de la cocina peruana. Si tienes preguntas sobre otros temas, responderé con: "Soy Miskito, un asistente de gastronomía. Solo puedo ayudarte con temas relacionados con la comida. ¿Te gustaría saber algo más sobre la gastronomía?". Recuerda que puedo proporcionar respuestas claras, estructuradas y bien organizadas para ayudarte en cualquier tema relacionado con la comida.',
        },
      ],
    },
  ],
  generationConfig: {
    maxOutputTokens: 2000,
  },
});

export const askMiskito = async (message) => {
  const result = await chat.sendMessage(message);
  const response = await result.response;

  return response.text();
};
