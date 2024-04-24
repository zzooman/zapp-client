'use client';
import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import GoodsDescription from '@/app/_components/post/GoodsDescription';
import GoodsTitle from '@/app/_components/post/GoodsTitle';
import GoodsPrice from '@/app/_components/post/GoodsPrice';
import GoodsTransactionType from '@/app/_components/post/GoodsTransactionType';
import PostGoodsButton from '@/app/_components/post/PostGoodsButton';
import UploadMedia, { Media } from '@/app/_components/post/UploadMedia';
import { MouseEventHandler, useCallback, useRef } from 'react';

export interface PostGoodsState {
  goodsName: string;
  goodsPrice: string;
  goodsTransactionType: 'direct' | 'shipping' | '';
  goodsDescription: string;
  goodsMedias: Media[];
}

export default function PostGoodsPage() {
  const mediaRef = useRef<Media[]>([]);
  const titleRef = useRef<string>('');
  const priceRef = useRef<string>('');
  const transactionTypeRef = useRef<'direct' | 'shipping' | ''>('');
  const descriptionRef = useRef<string>('');

  const onSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(e => {
    e.preventDefault();
    const postGoodsState: PostGoodsState = {
      goodsName: titleRef.current,
      goodsPrice: priceRef.current,
      goodsTransactionType: transactionTypeRef.current,
      goodsDescription: descriptionRef.current,
      goodsMedias: mediaRef.current,
    };
    console.log('postGoodsState', postGoodsState);
  }, []);

  return (
    <Container>
      <Header back title="판매물품 등록" />
      <form className="flex flex-col justify-start space-y-6 pt-16 mb-28 px-4 h-screen">
        <UploadMedia ref={mediaRef} />
        <GoodsTitle ref={titleRef} />
        <GoodsPrice ref={priceRef} />
        <GoodsTransactionType ref={transactionTypeRef} />
        <GoodsDescription ref={descriptionRef} />
        <PostGoodsButton onSubmit={onSubmit} />
      </form>
    </Container>
  );
}
