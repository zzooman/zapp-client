import { bool } from 'aws-sdk/clients/signer';
import { FeedWithAuthorRaw, ProductWithSellerRaw, User } from './types';

export interface Res<T> {
  status: number;
  data: T;
}

export interface GetProductResponse {
  id: number;
  seller: User;
  title: string;
  content: string;
  medias: string[];
  price: number;
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

export interface CreateProductParams {
  title: string;
  content: string;
  price: string;
  medias: string[];
}
export interface CreateProductResponse {
  seller: string;
  title: string;
  content: string;
  created_at: unknown;
  id: number;
  medias: string[];
  price: number;
  views: number;
}
export interface GetPostsParams {
  limit: number;
  page: number;
}
export interface GetProductsResponse {
  products: GetProductResponse[];
  next: boolean;
}

export interface GetSearchProductsResponse {
  products: ProductWithSellerRaw[];
  next: boolean;
  keyword: string;
}

export interface GetSearchFeedsResponse {
  feeds: FeedWithAuthorRaw[];
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

export interface GetRoomResponse {
  room_id: number;
  recipient: string;
  last_message: string;
  last_message_at: string;
  unread_count: number;
}

export interface CreateFeedParams {
  content: string;
  medias: string[];
}

export interface CreateFeedResponse {
  id: number;
  author: string;
  content: string;
  medias: string[];
  views: number;
  created_at: string;
}

export interface Author {
  username: string;
  email: string;
  phone: string;
  profile: string | null;
}

export interface GetFeedsResponse {
  next: bool;
  feeds: GetFeedResponse[];
}

export interface GetFeedResponse {
  id: number;
  content: string;
  medias: string[];
  views: number;
  created_at: string;
  author: Author;
  isLiked: boolean;
  comments: number;
}

export interface GetFeedDetailResponse {
  id: number;
  content: string;
  medias: string[];
  views: number;
  created_at: string;
  author: {
    username: string;
    email: string;
    phone: string;
    profile: string | null;
  };
  isLiked: boolean;
  comments: unknown[];
}
