import { ProductWithSellerRaw } from '@/app/_lib/types/types';
import { currency } from '@/app/_lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Key } from 'react';

interface Props {
  product: ProductWithSellerRaw;
  key: Key;
}
export default function ProductRow({ product, key }: Props) {
  return (
    <Link href={`/product/${product.id}`} key={key}>
      <li className="relative flex gap-4 w-full h-32 py-4">
        {product.medias[0].includes('mp4') ? (
          <video src={product.medias[0]} className="w-[100px] aspect-square rounded-sm object-cover" />
        ) : (
          <Image src={product.medias[0]} width={100} height={100} className="rounded-sm object-cover" alt="image" />
        )}

        <div className="flex flex-col gap-1">
          <h3 className="text-sm">{product.title}</h3>
          <p className="text-xs">{product.content}</p>
          <strong className="text-sm">{currency(product.price)} 원</strong>
        </div>
      </li>
    </Link>
  );
}
