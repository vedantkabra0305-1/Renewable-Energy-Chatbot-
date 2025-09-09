import React from 'react';
import type { Persona, PersonaType } from '../types';
import { PERSONAS } from '../constants';
import { SparklesIcon } from './Icons';

interface LandingPageProps {
  onSelectPersona: (persona: PersonaType) => void;
}

const PersonaCard: React.FC<{ persona: Persona; onClick: () => void }> = ({ persona, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-xl shadow-md p-6 text-left group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start h-full border border-gray-200"
    aria-label={`Select persona: ${persona.title}`}
  >
    <div className="bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/5 text-brand-secondary p-3 rounded-lg mb-4 transition-colors duration-300 group-hover:from-brand-secondary/30">
      <persona.icon className="w-8 h-8" />
    </div>
    <h3 className="text-lg font-bold text-brand-dark mb-2">{persona.title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{persona.description}</p>
  </button>
);

export const LandingPage: React.FC<LandingPageProps> = ({ onSelectPersona }) => {
  const personaSectionRef = React.useRef<HTMLDivElement>(null);

  const handleScrollToPersonas = () => {
    personaSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-primary/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center z-10">
          <SparklesIcon className="w-16 h-16 mx-auto text-brand-secondary" />
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Your AI-Powered Renewable Energy Consultant
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">
            Instant, data-driven insights on solar, battery storage, and EV charging for your Australian business. Get ROI calculations, incentive information, and expert advice in minutes.
          </p>
          <div className="mt-10">
            <button
              onClick={handleScrollToPersonas}
              className="bg-brand-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow-secondary"
            >
              Get Your Free Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Persona Selector Section */}
      <section ref={personaSectionRef} className="py-20 sm:py-24 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">Who are you?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Select the category that best describes your business to tailor your consultation.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONAS.map((persona) => (
              <PersonaCard key={persona.id} persona={persona} onClick={() => onSelectPersona(persona.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Renewable Energy Sales Chatbot. All rights reserved.
          </div>
      </footer>
    </div>
  );
};