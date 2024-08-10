'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import API from '../_lib/fetcher/fetcher';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { authState } from '../_lib/atom/auth';

export interface ILoginForm {
  username: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const setAuth = useSetRecoilState(authState);

  const onSubmit: SubmitHandler<ILoginForm> = async data => {
    const res = await API.login(data);
    if (res.status === 200) {
      setAuth(prev => ({
        ...prev,
        token: res.data.auth_token,
        username: res.data.user.username,
      }));
      alert('로그인 성공');
      router.push('/');
    } else {
      alert('로그인 실패');
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginForm>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className="relative flex flex-col space-y-6 mt-6 h-full">
      <div className="flex">
        <input
          className="bg-transparent border-b border-b-slate-400 w-full text-slate-50 h-10"
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
      <div className="flex">
        <input
          className="bg-transparent border-b border-b-slate-400 w-full text-slate-50 h-10"
          id="password"
          placeholder="password"
          required
          type="password"
          {...register('password', {
            required: { value: true, message: '입력해야해' },
            minLength: { value: 4, message: '4글자는 넘겨야지 임마' },
            maxLength: { value: 12, message: '12글자 넘기지마' },
          })}
        />
      </div>

      <button type="submit" className="absolute left-0 bottom-14 w-full bg-point-400 h-10 rounded-sm cursor-pointer">
        로그인
      </button>

      <Link
        href="/signup"
        className="absolute left-0 bottom-0 flex justify-center items-center w-full border border-point-400 h-10 rounded-sm cursor-pointer"
      >
        회원가입
      </Link>
    </form>
  );
}
