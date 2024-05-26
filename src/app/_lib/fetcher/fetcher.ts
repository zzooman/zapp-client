import { ILoginForm } from '@/app/login/loginForm';
import { ISignupForm } from '@/app/signup/signupForm';
import { Post } from '../types/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function handleResponse(res: Response) {
  const json = await res.json();
  if (res.ok) return json;
  throw new Error(json.message);
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

export async function post(data: Omit<Post, 'medias'>) {
  return await fetch(`${API_URL}/post`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function uploadMedia(media: FormData) {
  return await fetch(`${API_URL}/post/media`, {
    method: 'POST',
    body: media,
    credentials: 'include',
  }).then(handleResponse);
}

const API = {
  signup,
  login,
  post,
  uploadMedia,
};
export default API;
