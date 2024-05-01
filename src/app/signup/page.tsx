import SignupForm from './signupForm';

export default function SignupPage() {
  return (
    <div className="flex flex-col h-screen p-6">
      <h1 className="font-bold text-xl">회원가입</h1>
      <SignupForm />
    </div>
  );
}
