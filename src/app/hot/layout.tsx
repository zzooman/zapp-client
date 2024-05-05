import { PropsWithChildren } from 'react';
import Container from '../_components/common/Container';
import Footer from '../_components/common/footer/Footer';

export default function HotLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
}
