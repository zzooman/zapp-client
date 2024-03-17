'use client';

import { ILoginForm, ILoginResponse, caremateLogin } from '@/lib/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import Container from '@/components/common/Container';
import Header from '@/components/common/header/Header';

export default function Login() {
  const router = useRouter();
  const { mutate, error } = useMutation<ILoginResponse, Error, ILoginForm>({
    mutationFn: form => caremateLogin(form),
    onSuccess: onLoginSuccess,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = data => {
    mutate(data);
  };

  function onLoginSuccess(data: ILoginResponse) {
    if (data.code === 400) return alert(data.message);
    localStorage.setItem('cgs-auth', data.data.access_token);
    router.push('/');
  }

  return (
    <Container>
      <Header />
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="username"
              required
              type="text"
              {...register('email', {
                required: { value: true, message: '입력해야해' },
                minLength: { value: 4, message: '4글자는 넘겨야지 임마' },
                maxLength: { value: 12, message: '12글자 넘기지마' },
              })}
            />
          </div>
          <div className="h-4 mt-0">
            {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
          </div>

          <div className="space-y-2 mt-3">
            <div className="flex justify-between items-center">
              <label htmlFor="password">Password</label>
              <Link className="text-sm underline" href="#">
                Forgot password?
              </Link>
            </div>
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
          <div className="h-4 mt-0">
            {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}
          </div>

          <div className="flex items-center mt-4">
            <input className="mr-2" id="remember" type="checkbox" {...register('remember')} />
            <label className="text-sm" htmlFor="remember">
              Remember me
            </label>
          </div>
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
