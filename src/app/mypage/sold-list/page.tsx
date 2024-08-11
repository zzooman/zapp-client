'use client';

import ProductRow from '@/app/_components/common/post/ProductRow';
import API from '@/app/_lib/fetcher/fetcher';
import { ProductWithSellerRaw } from '@/app/_lib/types/types';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SoldListPage() {
  const [products, setProducts] = useState<ProductWithSellerRaw[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    API.productsISold({ limit: 10, page: 1 })
      .then(res => {
        if (res.status === 200) {
          setProducts(res.data);
        } else {
          alert(res.data);
          router.push('/');
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  return (
    <main>
      {!loading && products?.length === 0 && <p className="mt-32 w-full text-center">판매한 상품이 없습니다.</p>}
      <ul className="flex flex-col divide-y divide-slate-700 my-10">
        {products?.map((product, i) => (
          <ProductRow key={i} product={product} />
        ))}
      </ul>
    </main>
  );
}
