
import { GoogleGenAI, Chat } from "@google/genai";
import { PersonaType } from '../types';
import { getSystemPrompt } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = (persona: PersonaType): Chat => {
  const systemInstruction = getSystemPrompt(persona);
  
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
      temperature: 0.7,
      topP: 0.9,
    },
  });
  
  return chat;
};
