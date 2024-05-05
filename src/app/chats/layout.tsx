import { PropsWithChildren } from 'react';
import Container from '../_components/common/Container';
import Header from '../_components/common/header/Header';
import Footer from '../_components/common/footer/Footer';

export default function ChatsLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header title="채팅" />
      {children}
      <Footer />
    </Container>
  );
}
