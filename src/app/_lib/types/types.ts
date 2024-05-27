export interface Res<T> {
  status: number;
  data: T;
}

export interface Media {
  type: 'image' | 'video';
  url: string;
  file?: File;
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
  medias: string[];
  price: number;
  stock: number;
  views: number;
}
export interface GetPostsParams {
  limit: number;
  offset: number;
}
export interface GetPostsResponse {
  id: number;
  author: User;
  title: string;
  content: string;
  medias: string[];
  price: number;
  stock: number;
  views: number;
  created_at: string;
  isLiked: boolean;
}
export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  profile: string | null;
}
export interface PostItem {
  id: number;
  author: User;
  title: string;
  content: string;
  medias: Media[];
  price: number;
  stock: number;
  views: number;
  created_at: string;
  isLiked: boolean;
}
