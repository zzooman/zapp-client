import ButtonCreatePost from '@/app/_components/common/ButtonCreatePost';
import Container from '@/app/_components/common/Container';
import Footer from '@/app/_components/common/footer/Footer';

import PostList from '@/app/_components/posts/PostList';
import API from './_lib/fetcher/fetcher';

export default async function HomePage() {
  const posts = await API.getPosts({ limit: 10, page: 1 });

  return (
    <Container>
      <main className="flex justify-center min-h-screen h-max w-full m-auto overflow-y-auto">
        <PostList initialPosts={posts.data.posts} />
      </main>
      <ButtonCreatePost show />
      <Footer />
    </Container>
  );
}
