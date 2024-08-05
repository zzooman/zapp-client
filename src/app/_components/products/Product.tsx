import React from 'react';
import Link from 'next/link';
import { currency, mediasConvertor, timeLapse } from '@/app/_lib/utils/utils';
import MediaSlider from '../common/swiper/MediaSlider';
import PostProfile from './SellerProfile';
import { GetProductResponse } from '@/app/_lib/types/dto';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/css/swiper.css';

interface Props {
  product: GetProductResponse;
}

export default function Product({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`}>
      <PostProfile user={product.seller} />
      <div className="w-full aspect-video">
        <MediaSlider medias={mediasConvertor(product.medias)} />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold text-slate-200 flex justify-between items-center w-full">
            {product.title}
            <span className="text-xs ml-2 text-slate-600">{timeLapse(product.created_at)}</span>
          </h2>
          <div className="flex">
            <div className="font-bold">{product.isLiked}</div>
          </div>
        </div>
        <strong className="mt-2 text-slate-200">{currency(product.price)} 원</strong>
        <p className="text-xs mt-2 truncate-2 text-slate-400">{product.content}</p>
      </div>
    </Link>
  );
}
