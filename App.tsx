import React, { useState } from 'react';
import { LandingPage } from './components/PersonaSelector';
import { ChatInterface } from './components/ChatInterface';
import type { PersonaType } from './types';

function App() {
  const [selectedPersona, setSelectedPersona] = useState<PersonaType | null>(null);

  const handleSelectPersona = (persona: PersonaType) => {
    setSelectedPersona(persona);
  };
  
  const handleReset = () => {
    setSelectedPersona(null);
  }

  return (
    <div className="min-h-screen bg-brand-light font-sans">
      {!selectedPersona ? (
        <LandingPage onSelectPersona={handleSelectPersona} />
      ) : (
        <ChatInterface persona={selectedPersona} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;