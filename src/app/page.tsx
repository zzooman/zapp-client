import { use } from 'react';
import ButtonCreateFeed from '@/app/_components/common/ButtonCreateFeed';
import Container from '@/app/_components/common/Container';
import Footer from '@/app/_components/common/footer/Footer';
import Header from '@/app/_components/common/header/Header';

import PostList from '@/app/_components/posts/PostList';
import API from './_lib/fetcher/fetcher';

export default function HomePage() {
  const posts = use(API.getPosts({ limit: 10, page: 1 }));

  return (
    <Container>
      <Header menu />
      <main className="flex justify-center min-h-screen h-max w-full m-auto overflow-y-auto">
        <PostList initialPosts={posts.data.posts} />
      </main>
      <ButtonCreateFeed show />
      <Footer />
    </Container>
  );
}
