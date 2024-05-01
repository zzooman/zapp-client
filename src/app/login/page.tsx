'use client';

import LoginForm from './loginForm';

export default function LoginPage() {
  return (
    <main className="flex flex-col h-screen p-6">
      <h1 className="font-bold text-xl">로그인</h1>
      <LoginForm />
    </main>
  );
}
