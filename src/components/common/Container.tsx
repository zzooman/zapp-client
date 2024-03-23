import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function Container({ children }: Props) {
  return (
    <div className="relative h-screen w-full max-w-3xl m-auto overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-hide">{children}</div>
    </div>
  );
}
