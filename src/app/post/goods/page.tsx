import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import { UploadMedia } from '@/app/_components/post/uploadMedia';

export default function PostGoods() {
  return (
    <Container>
      <Header back title="판매물품 등록" />
      <main className="pt-16">
        <UploadMedia />
      </main>
    </Container>
  );
}
