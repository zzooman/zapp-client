import { PropsWithChildren } from 'react';
import Container from '../_components/common/Container';

export default function SearchLayout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
