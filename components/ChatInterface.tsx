import type React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { createChatSession } from '../services/geminiService';
import type { Message, PersonaType } from '../types';
import { MessageRole } from '../types';
import { PaperAirplaneIcon, SparklesIcon, UserCircleIcon, BoltIcon, ArrowLeftIcon } from './Icons';
import { PERSONAS, QUICK_REPLIES } from '../constants';

// Helper component defined outside ChatInterface to prevent re-creation on re-renders
const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
  </div>
);

// Helper component for rendering messages
const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isModel = message.role === MessageRole.Model;
  return (
    <div className={`flex items-start gap-3 my-4 ${!isModel && 'flex-row-reverse'}`}>
      <div className={`p-1.5 rounded-full self-start ${isModel ? 'text-brand-primary' : 'text-gray-500'}`}>
        {isModel ? <SparklesIcon className="w-7 h-7" /> : <UserCircleIcon className="w-7 h-7" />}
      </div>
      <div className={`p-4 rounded-xl max-w-2xl shadow-sm ${isModel ? 'bg-gray-100 text-brand-dark' : 'bg-gradient-to-br from-brand-primary to-brand-primary-light text-white'}`}>
        <div className="prose prose-sm max-w-none prose-p:my-0 prose-ul:my-2 prose-ol:my-2 text-inherit" dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br />') }}></div>
      </div>
    </div>
  );
};

interface ChatInterfaceProps {
  persona: PersonaType;
  onReset: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ persona, onReset }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedPersona = PERSONAS.find(p => p.id === persona);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeChat = useCallback(() => {
    chatSession.current = createChatSession(persona);
    const initialMessage: Message = {
        role: MessageRole.Model,
        text: `Hello! I'm your dedicated consultant for ${selectedPersona?.title || 'your business'}. To provide you with an accurate preliminary assessment, could you please provide your company name, ABN, and your average monthly or quarterly electricity bill? Or, select one of the options below to get started.`
    };
    setMessages([initialMessage]);
    setShowQuickReplies(true);
  }, [persona, selectedPersona?.title]);


  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;
    
    setShowQuickReplies(false);
    const userMessage: Message = { role: MessageRole.User, text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: MessageRole.Model, text: '' }]);

    try {
      if (!chatSession.current) {
        throw new Error("Chat session not initialized");
      }
      
      const stream = await chatSession.current.sendMessageStream({ message: messageText });

      let fullResponse = '';
      for await (const chunk of stream) {
        fullResponse += chunk.text;
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = "I'm sorry, I encountered an error. Please try again.";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReplyClick = (prompt: string) => {
    sendMessage(prompt);
  };
  
  const quickReplies = QUICK_REPLIES[persona] || [];

  return (
    <div className="flex justify-center items-center w-full h-screen bg-brand-light p-0 sm:p-4">
      <div className="flex flex-col h-full w-full max-w-5xl bg-white sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 bg-grid-pattern">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/80 p-4 flex justify-between items-center z-10 shrink-0">
          <div className="flex items-center gap-4">
             <button onClick={onReset} className="text-gray-500 hover:text-brand-primary hover:bg-gray-100 p-2 rounded-full transition-colors duration-200">
                <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <div className="bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/5 text-brand-secondary p-2 rounded-lg">
              {selectedPersona && <selectedPersona.icon className="w-7 h-7" />}
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-dark">AI Energy Consultant</h1>
              <p className="text-sm text-gray-500">Tailored for: <span className="font-semibold text-brand-secondary">{selectedPersona?.title}</span></p>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === MessageRole.Model && messages[messages.length - 1]?.text === '' && (
              <div className="flex items-start gap-3 my-4">
                  <div className="p-1.5 rounded-full text-brand-primary">
                      <SparklesIcon className="w-7 h-7" />
                  </div>
                  <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
                      <TypingIndicator />
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>
        
        {showQuickReplies && quickReplies.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-white/50 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
                    {quickReplies.map((reply, index) => (
                        <button
                            key={index}
                            onClick={() => handleQuickReplyClick(reply.prompt)}
                            className="bg-brand-secondary/10 text-brand-secondary text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-secondary/20 transition-all duration-200 flex items-center gap-2 hover:scale-105"
                        >
                            <BoltIcon className="w-4 h-4" />
                            {reply.title}
                        </button>
                    ))}
                </div>
            </div>
        )}

        <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 p-4 shrink-0">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e as unknown as React.FormEvent);
                    }
                }}
                placeholder="Ask about solar, batteries, or EV charging..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary-light focus:outline-none focus:shadow-glow-primary transition-shadow resize-none bg-gray-50"
                rows={1}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-3 bg-brand-primary text-white rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-brand-primary/90 transition-all duration-300 shrink-0 transform enabled:hover:scale-110 enabled:hover:shadow-glow-primary"
                aria-label="Send message"
              >
                <PaperAirplaneIcon className="w-6 h-6" />
              </button>
            </form>
          </div>
        </footer>
      </div>
    </div>
  );
};