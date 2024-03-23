import Container from '@/components/common/Container';
import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';

import FeedsList from '@/components/feeds/FeedsList';

export default function Home() {
  return (
    <Container>
      <Header menu />
      <main className="flex justify-center min-h-screen h-max w-full m-auto overflow-y-auto">
        <FeedsList />
      </main>
      <Footer />
    </Container>
  );
}
