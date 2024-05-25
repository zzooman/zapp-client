export interface Media {
  type: 'image' | 'video';
  url: string;
  form?: FormData;
}

export interface Post {
  title: string;
  content: string;
  price: string;
  stock: number;
  medias: Media[];
}

export interface CreatePostPayload {
  title: string;
  content: string;
  price: string;
  stock: number;
  medias: FormData[];
}
