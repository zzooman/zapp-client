import Container from '@/components/common/Container';

interface Props {
  children: React.ReactNode;
}
export default function SignupLayout({ children }: Props) {
  return <Container>{children}</Container>;
}
