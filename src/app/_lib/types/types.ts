export type PostType = 'product' | 'feed';
export interface Media {
  type: 'image' | 'video';
  url: string;
}

export interface PostMedia {
  type: 'image' | 'video';
  url: string;
  file: File;
}

export interface User {
  username: string;
  email: string;
  phone: string;
  profile: string | null;
}

export interface PostWithAuthorRaw {
  id: number;
  author: string;
  title: string;
  content: string;
  medias: string[];
  price: number;
  stock: number;
  views: number;
  createdAt: string;
  email: string;
  phone: string | null;
  profile: string | null;
}

export interface Chat {
  sender: string;
  message: string;
  createdAt: string;
}
