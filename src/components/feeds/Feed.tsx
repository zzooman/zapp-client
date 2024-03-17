import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  feed: {
    img: StaticImageData;
    title: string;
    content: string;
  };
}

export default function Feed({ feed }: Props) {
  return (
    <Link href="/feed-detail/1" className="w-full p-2">
      <Image
        src={feed.img}
        className="w-full aspect-square object-contain md:aspect-video border"
        alt="product"
        priority
      ></Image>
      <h3>{feed.title}</h3>
      <p>{feed.content}</p>
    </Link>
  );
}
