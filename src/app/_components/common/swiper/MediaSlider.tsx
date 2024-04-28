'use client';

import { Media } from '@/app/_lib/types/types';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/css/swiper.css';

interface Props {
  medias: Media[];
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '9/16';
}
export default function MediaSlider({ medias, objectFit, aspectRatio }: Props) {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{ width: '100%', aspectRatio: aspectRatio ?? '16/9' }}
    >
      {medias.map((media, i) => (
        <SwiperSlide key={i}>
          {media.type === 'video' && (
            <video src={media.url} controls style={{ width: '100%', objectFit: objectFit ?? 'cover' }} />
          )}
          {media.type === 'image' && (
            <img src={media.url} alt={media.type} className="w-full" style={{ objectFit: objectFit ?? 'cover' }} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
