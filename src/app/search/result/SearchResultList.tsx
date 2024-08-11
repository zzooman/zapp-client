'use client';

import { GetSearchFeedsResponse, GetSearchProductsResponse, Res } from '@/app/_lib/types/dto';
import { cls } from '@/app/_lib/utils/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import FeedResultList from './FeedResultList';
import ProductResultList from './ProductResultList';

type Tab = 'feed' | 'product';
interface Props {
  feeds: Res<GetSearchFeedsResponse>;
  products: Res<GetSearchProductsResponse>;
}
export default function SearchResultList({ feeds, products }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<Tab>('feed');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const tab = searchParams.get('tab') as Tab;
    setTab(tab);
  }, [searchParams]);

  return (
    <section>
      <article className="flex">
        <button
          className={cls('w-full h-10', tab === 'feed' ? 'bg-point-500' : 'border border-slate-700')}
          onClick={() => router.push(pathname + '?' + createQueryString('tab', 'feed'))}
        >
          게시글
        </button>
        <button
          className={cls('w-full h-10', tab === 'product' ? 'bg-point-500' : 'border border-slate-700')}
          onClick={() => router.push(pathname + '?' + createQueryString('tab', 'product'))}
        >
          상품
        </button>
      </article>

      <article>
        {tab === 'feed' && <FeedResultList initialData={feeds.data} />}
        {tab === 'product' && <ProductResultList initialData={products.data} />}
      </article>
    </section>
  );
}
