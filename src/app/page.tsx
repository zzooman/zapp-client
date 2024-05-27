import ButtonCreateFeed from '@/app/_components/common/ButtonCreateFeed';
import Container from '@/app/_components/common/Container';
import Footer from '@/app/_components/common/footer/Footer';
import Header from '@/app/_components/common/header/Header';

import PostList from '@/app/_components/posts/PostList';

export default function HomePage() {
  return (
    <Container>
      <Header menu />
      <main className="flex justify-center min-h-screen h-max w-full m-auto overflow-y-auto">
        <PostList initialPosts={[]} />
      </main>
      <ButtonCreateFeed show />
      <Footer />
    </Container>
  );
}
