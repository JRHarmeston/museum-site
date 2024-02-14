export interface Highlight {
  date: string;
  description: string;
  id?: number | string;
  image: string;
  name: string;
  news?: {
    date?: string;
    title: string;
  };
  quiz?: string;
  isPartner?: boolean;
}

export interface HighlightNews {
  date?: string;
  title: string;
}
