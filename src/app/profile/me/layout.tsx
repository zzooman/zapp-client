import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import { PropsWithChildren } from 'react';

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back title="프로필 설정" />
      {children}
    </Container>
  );
}
