'use client';
import Container from '@/app/_components/common/Container';
import { FlexBox } from '@/app/_components/common/ui/FlexBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface Media {
  type: 'image' | 'video';
  url: string;
}

export default function CreateFeedPage() {
  const router = useRouter();

  const [medias, setMedias] = useState(new Map<number, Media>());

  const onImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.onload = () => {
        setMedias(prev => {
          const cloned = new Map(prev);
          return cloned.set(cloned.size, { type: 'image', url: fileReader.result as string });
        });
      };
      fileReader.readAsDataURL(file);
    }
  };

  const onVideoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.onload = () => {
        const videoUrl = URL.createObjectURL(file);
        setMedias(prev => {
          const cloned = new Map(prev);
          return cloned.set(cloned.size, { type: 'video', url: videoUrl });
        });
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <header className="absolute top-0 left-0 flex justify-between items-center w-full h-16 p-4 z-10">
        <span onClick={router.back} className="text-sm">
          Cancel
        </span>
        <button className="bg-point-500 px-3 py-1 rounded-full text-sm">Post</button>
      </header>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        style={{ position: 'relative', width: '100%', height: '30vh' }}
        pagination={{ clickable: true }}
      >
        {Array.from(medias).map(([key, media]) => {
          return (
            <SwiperSlide key={key}>
              {media.type === 'image' && <Image src={media.url} alt="image" fill objectFit="contain" />}
              {media.type === 'video' && <video src={media.url} controls autoPlay className="h-full object-contain" />}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <textarea placeholder="What's happening?" className="w-full h-[40vh] p-4 text-lg outline-none"></textarea>
      <FlexBox justify="around" align="center" classNames="fixed bottom-0 left-0 w-full h-16">
        <div>
          <label htmlFor="image">image</label>
          <input id="image" type="file" accept="image/*" className="hidden" onInput={onImageInput} />
        </div>
        <div>
          <label htmlFor="video">video</label>
          <input id="video" type="file" accept="video/*" className="hidden" onInput={onVideoInput} />
        </div>
      </FlexBox>
    </Container>
  );
}
