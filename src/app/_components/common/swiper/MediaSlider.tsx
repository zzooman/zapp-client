'use client';

import { Media } from '@/app/_lib/types/types';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/css/swiper.css';

interface Props {
  medias: Omit<Media, 'file'>[];
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '9/16';
  rouneded?: boolean;
}
export default function MediaSlider({ medias, objectFit, aspectRatio, rouneded }: Props) {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{
        width: '100%',
        maxHeight: '50vh',
        aspectRatio: aspectRatio ?? '16/9',
        borderRadius: rouneded ? '8px' : '',
      }}
      // onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {medias.map((media, i) => (
        <SwiperSlide key={i}>
          {media.type === 'video' && (
            <video
              src={media.url}
              controls
              style={{ width: '100%', height: '100%', objectFit: objectFit ?? 'cover' }}
            />
          )}
          {media.type === 'image' && (
            <img
              src={media.url}
              alt={media.type}
              className="w-full h-full"
              style={{ objectFit: objectFit ?? 'cover' }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
