import ButtonCreatePost from '@/app/_components/common/ButtonCreatePost';
import Container from '@/app/_components/common/Container';
import Footer from '@/app/_components/common/footer/Footer';

import ProductList from '@/app/_components/products/ProductList';
import API from '../_lib/fetcher/fetcher';

export default async function ProductListPage() {
  const products = await API.getProducts({ limit: 10, page: 1 });

  return (
    <Container>
      <main className="flex justify-center min-h-screen h-max w-full m-auto overflow-y-auto">
        <ProductList inintialProducts={products.data.products} />
      </main>
      <ButtonCreatePost show />
      <Footer />
    </Container>
  );
}
