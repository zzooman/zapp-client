import { PropsWithChildren } from 'react';
import Container from '../_components/common/Container';

export default function LoginLayout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
