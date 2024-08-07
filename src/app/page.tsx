import ButtonCreatePost from '@/app/_components/common/ButtonCreatePost';
import Container from '@/app/_components/common/Container';
import Footer from '@/app/_components/common/footer/Footer';

import API from './_lib/fetcher/fetcher';
import FeedList from './_components/feeds/FeedList';

export default async function HomePage() {
  const feeds = await API.getFeeds({ limit: 10, page: 1 });

  return (
    <Container>
      <main className="flex justify-center min-h-screen h-max w-full m-auto overflow-y-auto">
        <FeedList inintialFeeds={feeds.data.feeds} />
      </main>
      <ButtonCreatePost show />
      <Footer />
    </Container>
  );
}
