'use client';

import API from '@/app/_lib/fetcher/fetcher';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface ISignupForm {
  username: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  location?: string;
}

export default function SignupForm() {
  const { register, handleSubmit } = useForm<ISignupForm>();

  const onSubmit: SubmitHandler<ISignupForm> = data => {
    API.signup(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className="relative flex flex-col space-y-6 mt-6 h-full">
      <div className="flex">
        <input
          className="bg-transparent border-b border-b-slate-400 w-full text-slate-50 h-10"
          id="username"
          type="text"
          placeholder="닉네임"
          {...register('username', { required: true, min: 4, max: 32 })}
        />
      </div>

      <div className="flex">
        <input
          className="bg-transparent border-b border-b-slate-400 w-full text-slate-50 h-10"
          id="password"
          type="password"
          placeholder="비밀번호"
          {...register('password', { required: true, min: 6, max: 32 })}
        />
      </div>

      <div className="flex">
        <input
          className="bg-transparent border-b border-b-slate-400 w-full text-slate-50 h-10"
          id="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm', { required: true, min: 6, max: 32 })}
        />
      </div>

      <div className="flex">
        <input
          className="bg-transparent border-b border-b-slate-400 w-full text-slate-50 h-10"
          id="phone"
          type="number"
          placeholder='전화번호 ("-" 없이 입력)'
          {...register('phone', { required: true, minLength: 11, maxLength: 11 })}
        />
      </div>

      <div className="flex">
        <input
          className="bg-transparent border-b border-b-slate-400 w-full text-slate-50 h-10"
          type="email"
          placeholder="이메일"
          {...register('email', { required: true, maxLength: 64, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
        />
      </div>

      <button type="submit" className="absolute left-0 bottom-0 w-full bg-point-400 h-10 rounded-sm cursor-pointer">
        회원가입
      </button>
    </form>
  );
}
