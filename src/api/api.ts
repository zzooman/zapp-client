import { ILoginForm } from '@/app/login/page';
import { ISignupForm } from '@/app/signup/signupForm';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

const API = {
  signup,
  login,
};
export default API;
