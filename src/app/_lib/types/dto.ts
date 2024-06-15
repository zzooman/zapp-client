import { PostWithAuthorRaw, User } from './types';

export interface Res<T> {
  status: number;
  data: T;
}

export interface GetPostResponse {
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
  posts: GetPostResponse[];
  next: boolean;
}

export interface GetSearchResponse {
  posts: PostWithAuthorRaw[];
  next: boolean;
  keyword: string;
}

export interface SearchTextResponse {
  id: number;
  search_text: string;
  count: number;
  created_at: string;
}

export interface LoginResponse {
  auth_token: string;
  user: MydataResponse;
}

export interface EnterChatRoomParams {
  user_a: string;
  user_b: string;
}

export interface MakeRoomResponse {
  id: number;
  user_a: string;
  user_b: string;
  created_at: string;
}

export interface MydataResponse {
  username: string;
  email: string;
  phone: string;
  profile: string | null;
  created_at: string;
  password_changed_at: string;
}

export interface GetMessage {
  created_at: string;
  id: number;
  message: string;
  room_id: number;
  sender: string;
}
export type GetMessagesResponse = GetMessage[];
