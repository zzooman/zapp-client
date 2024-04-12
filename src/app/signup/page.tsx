import SignupForm from './signupForm';

export default function SignupPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-xl">회원가입</h1>
      <SignupForm />
    </div>
  );
}
