import FeedRow from '@/app/_components/common/post/FeedRow';
import { FeedWithAuthorRaw } from '@/app/_lib/types/types';

interface Props {
  feeds: FeedWithAuthorRaw[];
}
export default function FeedResultList({ feeds }: Props) {
  return (
    <ul className="flex flex-col space-y-3 divide-y-[0.5px] divide-gray-700">
      {feeds.map((feed, i) => (
        <FeedRow feed={feed} key={i} />
      ))}
    </ul>
  );
}
