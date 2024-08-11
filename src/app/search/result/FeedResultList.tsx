'use client';

import Observer from '@/app/_components/common/Observer';
import FeedRow from '@/app/_components/common/post/FeedRow';
import API from '@/app/_lib/fetcher/fetcher';
import { FeedWithAuthorRaw } from '@/app/_lib/types/types';
import { useCallback, useState } from 'react';

interface Props {
  initialData: {
    feeds: FeedWithAuthorRaw[];
    keyword: string;
    next: boolean;
  };
}
export default function FeedResultList({ initialData }: Props) {
  const [feeds, setFeeds] = useState<FeedWithAuthorRaw[]>(initialData.feeds);
  const [next, setNext] = useState(initialData.next);
  const [page, setPage] = useState(1);

  const more = useCallback(async () => {
    if (next) {
      const res = await API.searchFeeds({ limit: 10, page: page + 1, query: initialData.keyword });
      setNext(res.data.next);
      setPage(page + 1);
      setFeeds(prev => {
        return [...prev, ...res.data.feeds];
      });
    }
  }, [feeds, next, page]);

  return (
    <ul className="flex flex-col space-y-3 divide-y-[0.5px] divide-gray-700">
      {feeds.length === 0 && <div className="mt-8">검색된 게시글이 없습니다.</div>}
      {feeds.map((feed, i) => (
        <FeedRow feed={feed} key={i} />
      ))}
      <Observer onShow={more} onHide={() => {}} />
    </ul>
  );
}
