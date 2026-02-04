export interface StyleOption {
  name: string;
  component: React.ReactNode | null;
  value: number;
  description?: string;
  preview?: string; // URL da imagem de preview
}

export interface StyleSection {
  title: string;
  id: string; // Para melhor identificação
  options: StyleOption[];
  category: 'layout' | 'component' | 'theme';
}

export type SelectedStyleOptions = Record<string, number>; // Usar ID string em vez de index