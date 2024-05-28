import { ILoginForm } from '@/app/login/loginForm';
import { ISignupForm } from '@/app/signup/signupForm';
import { CreatePostParams, CreatePostResponse, GetPostResponse, GetPostsParams, Res } from '../types/types';

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
  });
}

export async function login(data: ILoginForm) {
  return await fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
}

export async function post(data: CreatePostParams): Promise<Res<CreatePostResponse>> {
  return await fetch(`${API_URL}/post`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getPost(id: number): Promise<Res<GetPostResponse>> {
  return await fetch(`${API_URL}/post/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getPosts({ limit, offset }: GetPostsParams): Promise<Res<GetPostResponse[]>> {
  console.log(`${API_URL}/posts?limit=${limit}&offset=${offset}`);
  return await fetch(`${API_URL}/posts?limit=${limit}&offset=${offset}`, {
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

const API = {
  signup,
  login,
  post,
  getPost,
  getPosts,
  toggleLikePost,
};
export default API;
