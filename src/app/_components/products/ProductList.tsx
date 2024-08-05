'use client';

import { useCallback, useState } from 'react';
import Product from './Product';
import Observer from '../common/Observer';
import API from '@/app/_lib/fetcher/fetcher';
import { GetProductResponse } from '@/app/_lib/types/dto';

interface Params {
  inintialProducts: GetProductResponse[];
}
export default function ProductList({ inintialProducts }: Params) {
  const [products, setProducts] = useState<GetProductResponse[]>(inintialProducts);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);

  const more = useCallback(async () => {
    if (!next) return;
    const response = await API.getProducts({ limit: 10, page: page + 1 });
    if (response.status !== 200) return;
    setProducts([...products, ...response.data.products]);
    setNext(response.data.next);
    setPage(page + 1);
  }, [page, next, setNext, setProducts, products]);

  return (
    <div className="min-h-screen max-w-5xl w-full my-16">
      <ul className="flex flex-col space-y-3">
        {products?.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </ul>
      <Observer onShow={more} onHide={() => {}} />
    </div>
  );
}
