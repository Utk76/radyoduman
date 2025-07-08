export interface Program {
  id: string;
  title: string;
  description: string;
  host: string;
  time: string;
  day?: string;
  image: string;
  isLive?: boolean;
  

}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishDate: string;
  image: string;
  audioUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  image: string;
  author: string;
}

export interface TopTrack {
  id: string;
  title: string;
  artist: string;
  rank: number;
  
  image: string;
  listenUrl?: string;
}