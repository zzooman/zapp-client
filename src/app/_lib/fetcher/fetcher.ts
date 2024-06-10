import { cookies } from 'next/headers';
import { ILoginForm } from '@/app/login/loginForm';
import { ISignupForm } from '@/app/signup/signupForm';
import {
  CreatePostParams,
  CreatePostResponse,
  EnterChatRoomParams,
  GetPostResponse,
  GetPostsParams,
  GetSearchResponse,
  LoginResponse,
  Me,
  PostWithAuthor,
  Res,
  SearchTextResponse,
} from '../types/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function handleResponse(res: Response) {
  try {
    const json = await res.json();
    if (res.ok)
      return {
        status: res.status,
        data: json,
      };
    if (res.status === 401) {
      throw new Error('로그인이 필요합니다.');
    }
    throw new Error(json.error ?? 'An error occurred.');
  } catch (error: unknown) {
    console.log('error', error);
    return {
      status: res.status,
      data: String(error),
    };
  }
}

export async function signup(data: ISignupForm) {
  return await fetch(`${API_URL}/user`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}

export async function login(data: ILoginForm): Promise<Res<LoginResponse>> {
  return await fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function post(data: CreatePostParams): Promise<Res<CreatePostResponse>> {
  return await fetch(`${API_URL}/post`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getPost(id: number): Promise<Res<PostWithAuthor>> {
  return await fetch(`${API_URL}/post/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getPosts({ limit, page }: GetPostsParams): Promise<Res<GetPostResponse>> {
  return await fetch(`${API_URL}/posts?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    cache: 'no-store',
  }).then(handleResponse);
}

export async function searchPosts({
  limit,
  page,
  query,
}: GetPostsParams & { query: string }): Promise<Res<GetSearchResponse>> {
  return await fetch(`${API_URL}/posts/search?query=${query}&limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function toggleLikePost(id: number, isLiked: boolean) {
  return await fetch(`${API_URL}/post/${id}/${isLiked ? 'like' : 'unlike'}`, {
    method: isLiked ? 'POST' : 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getHotSearchTexts(): Promise<Res<SearchTextResponse[]>> {
  return await fetch(`${API_URL}/search/hot`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function me(): Promise<Res<Me>> {
  return await fetch(`${API_URL}/me`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function postsILiked({ limit, page }: GetPostsParams) {
  return await fetch(`${API_URL}/posts/liked?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function postsISold({ limit, page }: GetPostsParams) {
  return await fetch(`${API_URL}/posts/sold?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function postsIBought({ limit, page }: GetPostsParams) {
  return await fetch(`${API_URL}/posts/bought?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function enterChatRoom(data: EnterChatRoomParams) {
  return await fetch(`${API_URL}/room`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  }).then(handleResponse);
}

const API = {
  signup,
  login,
  post,
  getPost,
  getPosts,
  toggleLikePost,
  searchPosts,
  getHotSearchTexts,
  me,
  postsILiked,
  postsISold,
  postsIBought,
  enterChatRoom,
};
export default API;
