'use client';

import { useForm } from 'react-hook-form';

interface ISignupForm {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignupForm() {
  const { register, handleSubmit } = useForm<ISignupForm>();

  const onSubmit = (data: ISignupForm) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col">
      <input type="text" {...register('username', {})} />
      <input type="text" />
    </form>
  );
}
