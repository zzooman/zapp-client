'use client';
import Container from '@/app/_components/common/Container';
import Header from '@/app/_components/common/header/Header';
import GoodsDescription from '@/app/_components/post/GoodsDescription';
import GoodsName from '@/app/_components/post/GoodsName';
import GoodsPrice from '@/app/_components/post/GoodsPrice';
import GoodsTransactionType from '@/app/_components/post/GoodsTransactionType';
import PostGoodsButton from '@/app/_components/post/PostGoodsButton';
import UploadMedia from '@/app/_components/post/UploadMedia';

export default function PostGoods() {
  return (
    <Container>
      <Header back title="판매물품 등록" />
      <form className="flex flex-col justify-start space-y-6 pt-16 mb-28 px-4 h-screen">
        <UploadMedia />
        <GoodsName />
        <GoodsPrice />
        <GoodsTransactionType />
        <GoodsDescription />
        <PostGoodsButton />
      </form>
    </Container>
  );
}
