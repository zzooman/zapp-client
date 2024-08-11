import ProductRow from '@/app/_components/common/post/ProductRow';
import { ProductWithSellerRaw } from '@/app/_lib/types/types';

interface Props {
  products: ProductWithSellerRaw[];
}
export default function ProductResultList({ products }: Props) {
  return (
    <ul>
      {products.map((product, i) => (
        <ProductRow product={product} key={i} />
      ))}
    </ul>
  );
}
