import ButtonCreateFeed from '@/components/common/ButtonCreateFeed';
import Container from '@/components/common/Container';
import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';

import FeedsList from '@/components/feeds/FeedsList';

export default function HomePage() {
  return (
    <Container>
      <Header menu />
      <main className="flex justify-center min-h-screen h-max w-full m-auto overflow-y-auto">
        <FeedsList />
      </main>
      <ButtonCreateFeed show />
      <Footer />
    </Container>
  );
}
