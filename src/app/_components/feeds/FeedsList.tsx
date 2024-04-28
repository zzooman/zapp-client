import { IFeed } from '@/app/_lib/types/types';
import Feed from './Feed';

export const DUMMY: IFeed[] = [
  {
    id: 1,
    seller: {
      username: 'seller1',
      profile: '/images/me.jpg',
    },
    medias: [
      { type: 'image', url: '/images/cat.jpg' },
      { type: 'video', url: '/images/video.mp4' },
      { type: 'image', url: '/images/mushroom.jpg' },
    ],
    title: 'title1',
    content:
      '글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자.',
    price: 10000,
    counts: { stock: 10, like: 10, comment: 10, views: 10 },
    createdAt: '2021-09-01T00:00:00',
  },
  {
    id: 2,
    seller: {
      username: 'seller1',
      profile: '/images/me.jpg',
    },
    medias: [
      { type: 'image', url: '/images/cat.jpg' },
      { type: 'video', url: '/images/video.mp4' },
      { type: 'image', url: '/images/mushroom.jpg' },
    ],
    title: 'title1',
    content:
      '글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자.',
    price: 10000,
    counts: { stock: 10, like: 10, comment: 10, views: 10 },
    createdAt: '2021-09-01T00:00:00',
  },
  {
    id: 3,
    seller: {
      username: 'seller1',
      profile: '/images/me.jpg',
    },
    medias: [
      { type: 'image', url: '/images/cat.jpg' },
      { type: 'video', url: '/images/video.mp4' },
      { type: 'image', url: '/images/mushroom.jpg' },
    ],
    title: 'title1',
    content:
      '글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자.',
    price: 10000,
    counts: { stock: 10, like: 10, comment: 10, views: 10 },
    createdAt: '2021-09-01T00:00:00',
  },
];

export default function FeedsList() {
  return (
    <div className="min-h-screen max-w-5xl w-full my-16">
      <ul className="flex flex-col space-y-3">
        {DUMMY.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
      </ul>
    </div>
  );
}
