'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { StyleSection, SelectedStyleOptions } from '@/types/style';
import { INITIAL_STYLE_SECTIONS, getInitialSelectedOptions } from '@/config/styleConfig';

interface GlobalContextType {
  // Estados de loading
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  
  // Estado do tema
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Dados compartilhados
  sharedData: Record<string, any> | null;
  setSharedData: (data: Record<string, any> | null) => void;
  
  // Style sections
  styleSections: StyleSection[];
  setStyleSections: (sections: StyleSection[]) => void;
  
  // Selected style options
  selectedStyleOptions: SelectedStyleOptions;
  setSelectedStyleOptions: (options: SelectedStyleOptions | ((prev: SelectedStyleOptions) => SelectedStyleOptions)) => void;
  
  // Métodos utilitários
  resetStylesToDefault: () => void;
  getSelectedStyleValue: (sectionId: string) => number;
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
  const [sharedData, setSharedData] = useState<Record<string, any> | null>(null);
  const [styleSections, setStyleSections] = useState<StyleSection[]>(INITIAL_STYLE_SECTIONS);
  const [selectedStyleOptions, setSelectedStyleOptions] = useState<SelectedStyleOptions>(getInitialSelectedOptions());

  // Métodos utilitários
  const resetStylesToDefault = () => {
    setSelectedStyleOptions(getInitialSelectedOptions());
  };

  const getSelectedStyleValue = (sectionId: string): number => {
    return selectedStyleOptions[sectionId] || 0;
  };

  const value: GlobalContextType = {
    isLoading,
    setIsLoading,
    theme,
    setTheme,
    sharedData,
    setSharedData,
    styleSections,
    setStyleSections,
    selectedStyleOptions,
    setSelectedStyleOptions,
    resetStylesToDefault,
    getSelectedStyleValue,
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