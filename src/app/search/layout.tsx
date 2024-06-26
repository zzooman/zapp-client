import { PropsWithChildren } from 'react';
import Container from '../_components/common/Container';
import Footer from '../_components/common/footer/Footer';

export default function SearchLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
}
