import { PropsWithChildren } from 'react';
import Container from '../../_components/common/Container';
import ChatHeader from './ChatHeader';

export default function ChatLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <ChatHeader />
      {children}
    </Container>
  );
}
