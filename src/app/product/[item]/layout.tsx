import Container from '@/app/_components/common/Container';
import { PropsWithChildren } from 'react';
import Header from '@/app/_components/common/header/Header';
import ProductDetailHeader from './ProductDetailHeader';

export default function ProductDetailLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <ProductDetailHeader />
      {children}
    </Container>
  );
}
