import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function Container({ children }: Props) {
  return <div className="relative h-max w-full max-w-5xl m-auto overflow-hidden">{children}</div>;
}
