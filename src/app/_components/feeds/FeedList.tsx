'use client';

import { useCallback, useState } from 'react';

import Observer from '../common/Observer';
import API from '@/app/_lib/fetcher/fetcher';
import { GetFeedResponse } from '@/app/_lib/types/dto';
import Feed from './Feed';

interface Params {
  inintialFeeds: GetFeedResponse[];
}
export default function FeedList({ inintialFeeds }: Params) {
  const [feeds, setFeeds] = useState<GetFeedResponse[]>(inintialFeeds);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);

  const more = useCallback(async () => {
    if (!next) return;
    const response = await API.getFeeds({ limit: 10, page: page + 1 });
    if (response.status !== 200) return;
    setFeeds([...feeds, ...response.data.feeds]);
    setNext(response.data.next);
    setPage(page + 1);
  }, [feeds, next, page]);

  return (
    <div className="min-h-screen max-w-5xl w-full mt-4 mb-16">
      <ul className="flex flex-col space-y-3 divide-y-[0.5px] divide-gray-700">
        {feeds?.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
      </ul>
      <Observer onShow={more} onHide={() => {}} />
    </div>
  );
}
