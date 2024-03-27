import { ISignupForm } from '@/app/signup/signupForm';

export async function signup(data: ISignupForm) {
  console.log(process.env.NEXT_PUBLIC_API_URL + 'user');
  return await fetch(process.env.NEXT_PUBLIC_API_URL + 'user', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}

const API = {
  signup,
};
export default API;
