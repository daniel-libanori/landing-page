'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  // Estados de loading
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  
  // Estado do tema
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Dados compartilhados
  sharedData: any;
  setSharedData: (data: any) => void;
}

// Criação do contexto
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Provider do contexto
interface GlobalProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  // Estados básicos
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [sharedData, setSharedData] = useState<any>(null);

  const value: GlobalContextType = {
    isLoading,
    setIsLoading,
    theme,
    setTheme,
    sharedData,
    setSharedData,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  
  if (context === undefined) {
    throw new Error('useGlobalContext deve ser usado dentro de um GlobalProvider');
  }
  
  return context;
}

// Hook para controlar loading
export function useLoading() {
  const { isLoading, setIsLoading } = useGlobalContext();
  
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  
  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}