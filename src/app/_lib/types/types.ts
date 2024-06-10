export interface Res<T> {
  status: number;
  data: T;
}

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
  id: number;
  username: string;
  email: string;
  phone: string;
  profile: string | null;
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
  page: number;
}
export interface GetPostResponse {
  posts: PostWithAuthor[];
  next: boolean;
}
export interface PostWithAuthor {
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
export interface GetSearchResponse {
  posts: PostWithAuthorRow[];
  next: boolean;
  keyword: string;
}
export interface PostWithAuthorRow {
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
export interface SearchTextResponse {
  id: number;
  search_text: string;
  count: number;
  created_at: string;
}

export interface Me {
  username: string;
  email: string;
  phone: string;
  profile: string | null;
  created_at: string;
  password_changed_at: string;
}

export interface EnterChatRoomParams {
  user_a: string;
  user_b: string;
}

export interface LoginResponse {
  auth_token: string;
  user: Me;
}
