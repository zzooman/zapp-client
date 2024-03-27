'use client';

import API from '@/api/api';
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
    API.signup({ ...data, location: 'Seoul' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-4">
      <div className="flex">
        <label htmlFor="username">닉네임</label>
        <input
          className="text-black"
          id="username"
          type="text"
          {...register('username', { required: true, min: 4, max: 32 })}
        />
      </div>

      <div className="flex">
        <label htmlFor="password">비밀번호</label>
        <input
          className="text-black"
          id="password"
          type="password"
          {...register('password', { required: true, min: 6, max: 32 })}
        />
      </div>

      <div className="flex">
        <label htmlFor="passwordConfirm">비밀번호 재입력</label>
        <input
          className="text-black"
          id="passwordConfirm"
          type="password"
          {...register('passwordConfirm', { required: true, min: 6, max: 32 })}
        />
      </div>

      <div className="flex">
        <label htmlFor="phone">핸드폰번호</label>
        <input
          className="text-black"
          id="phone"
          type="number"
          {...register('phone', { required: true, minLength: 11, maxLength: 11 })}
        />
      </div>

      <div className="flex">
        <label htmlFor="email">이메일</label>
        <input
          className="text-black"
          type="email"
          {...register('email', { required: true, maxLength: 64, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
        />
      </div>

      <button type="submit" className="bg-red-400">
        회원가입
      </button>
    </form>
  );
}
