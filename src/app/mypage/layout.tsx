import { PropsWithChildren } from 'react';
import Container from '../_components/common/Container';
import Footer from '../_components/common/footer/Footer';
import Header from '../_components/common/header/Header';

export default function MypageLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header back title="내 정보" />
      {children}
      <Footer />
    </Container>
  );
}
