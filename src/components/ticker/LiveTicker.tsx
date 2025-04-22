'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiMapPin, FiDollarSign } from 'react-icons/fi';

// Tipos
type ShiftMessage = {
  id: string;
  title: string;
  location: string;
  salary: number;
  timestamp: string;
};

export default function LiveTicker() {
  const [messages, setMessages] = useState<ShiftMessage[]>([]);
  const [totalProcessed, setTotalProcessed] = useState(0);

  // Função para simular a recepção de mensagens em tempo real
  // Na versão real, isso seria substituído por um SSE ou WebSocket
  useEffect(() => {
    // Dados de exemplo
    const exampleMessages: ShiftMessage[] = [
      {
        id: '1',
        title: 'Plantão Clínica Geral',
        location: 'São Paulo, SP',
        salary: 1200,
        timestamp: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Emergência 12h',
        location: 'Rio de Janeiro, RJ',
        salary: 1500,
        timestamp: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'UTI Adulto',
        location: 'Brasília, DF',
        salary: 1800,
        timestamp: new Date().toISOString(),
      },
      {
        id: '4',
        title: 'Pronto Atendimento',
        location: 'Belo Horizonte, MG',
        salary: 1300,
        timestamp: new Date().toISOString(),
      },
      {
        id: '5',
        title: 'Clínica Médica',
        location: 'Porto Alegre, RS',
        salary: 1100,
        timestamp: new Date().toISOString(),
      },
    ];

    // Iniciar com alguns itens
    setMessages(exampleMessages.slice(0, 3));
    setTotalProcessed(347); // Número fictício de mensagens processadas hoje

    // Simular novos itens chegando
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * exampleMessages.length);
      const newMessage = {
        ...exampleMessages[randomIndex],
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => {
        // Manter apenas os últimos 5 itens
        const updated = [newMessage, ...prev];
        if (updated.length > 5) {
          updated.pop();
        }
        return updated;
      });

      setTotalProcessed((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Formatar o preço em reais
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Plantões chegando em tempo real</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          +{totalProcessed} processados hoje
        </span>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
              className="ticker-item flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="flex-grow">
                <p className="font-medium text-gray-800">{message.title}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                  <span className="flex items-center">
                    <FiMapPin className="mr-1" size={12} />
                    {message.location}
                  </span>
                  <span className="flex items-center text-primary font-medium">
                    <FiDollarSign className="mr-1" size={12} />
                    {formatCurrency(message.salary)}
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <FiClock className="mr-1" size={12} />
                Agora
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 