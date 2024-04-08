'use client';

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import Container from '@/components/common/Container';
import Header from '@/components/common/header/Header';
import API from '@/api/api';

export interface ILoginForm {
  username: string;
  password: string;
}

export default function Login() {
  const onSubmit: SubmitHandler<ILoginForm> = data => {
    API.login(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginForm>();

  return (
    <Container>
      <Header />
      <main>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-start h-screen w-full">
          <div className="space-y-2">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="username"
              required
              type="text"
              {...register('username', {
                required: { value: true, message: '입력해야해' },
                minLength: { value: 4, message: '4글자는 넘겨야지 임마' },
                maxLength: { value: 12, message: '12글자 넘기지마' },
              })}
            />
          </div>
          <div className="space-y-2 mt-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              required
              type="password"
              {...register('password', {
                required: { value: true, message: '입력해야해' },
                minLength: { value: 4, message: '4글자는 넘겨야지 임마' },
                maxLength: { value: 12, message: '12글자 넘기지마' },
              })}
            />
          </div>

          {/* <div className="flex items-center mt-4">
            <input className="mr-2" id="remember" type="checkbox" {...register('remember')} />
            <label className="text-sm" htmlFor="remember">
              Remember me
            </label>
          </div> */}
          <button className="w-full mt-4 bg-slate-900 text-white" type="submit">
            Login
          </button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <Link className="underline ml-2" href="#">
              Sign up
            </Link>
          </div>
        </form>
      </main>
    </Container>
  );
}
