import Observer from '@/app/_components/common/Observer';
import ProductRow from '@/app/_components/common/post/ProductRow';
import API from '@/app/_lib/fetcher/fetcher';
import { ProductWithSellerRaw } from '@/app/_lib/types/types';
import { useCallback, useState } from 'react';

interface Props {
  initialData: {
    products: ProductWithSellerRaw[];
    keyword: string;
    next: boolean;
  };
}
export default function ProductResultList({ initialData }: Props) {
  const [products, setProducts] = useState<ProductWithSellerRaw[]>(initialData.products);

  const [page, setPage] = useState(1);
  const [next, setNext] = useState(initialData.next);

  const more = useCallback(async () => {
    if (next) {
      const res = await API.searchProducts({ limit: 10, page: page + 1, query: initialData.keyword });
      setPage(page + 1);
      setNext(res.data.next);
      setProducts(prev => {
        return [...prev, ...res.data.products];
      });
    }
  }, [page, next, products]);

  return (
    <ul>
      {products.map((product, i) => (
        <ProductRow product={product} key={i} />
      ))}
      <Observer onShow={more} onHide={() => {}} />
    </ul>
  );
}
