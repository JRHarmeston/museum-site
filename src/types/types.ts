export interface Highlight {
  date: string;
  description: string;
  id?: number;
  image: string;
  name: string;
  news?: {
    date?: string;
    title: string;
  };
  quiz?: string;
}

export interface HighlightNews {
  date?: string;
  title: string;
}
