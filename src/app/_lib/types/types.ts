export interface Res<T> {
  status: number;
  data: T;
}

export interface Media {
  type: 'image' | 'video';
  url: string;
  file: File;
}

export interface Post {
  title: string;
  content: string;
  price: string;
  stock: number;
  medias: Media[];
}

export interface S3UploadResponse {
  Key: string;
  Location: string;
  Bucket: string;
  ETag: string;
}

export interface CreatePostParams {
  title: string;
  content: string;
  price: string;
  stock: number;
  medias: string[];
}
export interface CreatePostResponse {
  author: string;
  title: string;
  content: string;
  created_at: unknown;
  id: number;
  media: string[];
  price: number;
  stock: number;
  views: number;
}
