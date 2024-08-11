import SearchForm from '../SearchForm';
import API from '@/app/_lib/fetcher/fetcher';
import { redirect } from 'next/navigation';
import SearchResultList from './SearchResultList';

export default async function SearchResultPage({ searchParams }: { searchParams: { q: string } }) {
  const feeds = await API.searchFeeds({ limit: 10, page: 1, query: searchParams.q });
  const products = await API.searchProducts({ limit: 10, page: 1, query: searchParams.q });

  if (feeds.data.feeds.length === 0 && products.data.products.length === 0) {
    redirect(`/search?no-result=true&keyword=${searchParams.q}`);
  }

  return (
    <main className="p-4">
      <SearchForm />
      <section className="mt-16">
        <SearchResultList feeds={feeds} products={products} />
      </section>
    </main>
  );
}
