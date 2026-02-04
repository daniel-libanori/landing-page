import { StyleSection } from '@/types/style';

export const INITIAL_STYLE_SECTIONS: StyleSection[] = [
  {
    id: 'header',
    title: "Header",
    category: 'component',
    options: [
      { name: "Clássico", component: null, value: 1, description: "Header tradicional com navegação simples" },
      { name: "Moderno", component: null, value: 2, description: "Design moderno com elementos visuais" },
      { name: "Minimalista", component: null, value: 3, description: "Layout limpo e minimalista" }
    ]
  },
  {
    id: 'hero',
    title: "Hero Section",
    category: 'layout',
    options: [
      { name: "Banner Completo", component: null, value: 1, description: "Hero ocupando toda a tela" },
      { name: "Split Screen", component: null, value: 2, description: "Conteúdo dividido em duas colunas" },
      { name: "Video Background", component: null, value: 3, description: "Hero com vídeo de fundo" }
    ]
  },
  {
    id: 'footer',
    title: "Footer",
    category: 'component',
    options: [
      { name: "Simples", component: null, value: 1, description: "Footer básico com informações essenciais" },
      { name: "Com Links", component: null, value: 2, description: "Footer expandido com links organizados" },
      { name: "Newsletter", component: null, value: 3, description: "Footer com formulário de newsletter" }
    ]
  }
];

export const getInitialSelectedOptions = (): Record<string, number> => {
  return INITIAL_STYLE_SECTIONS.reduce((acc, section) => {
    acc[section.id] = 0; // Primeira opção selecionada por padrão
    return acc;
  }, {} as Record<string, number>);
};