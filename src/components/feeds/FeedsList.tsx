import Cat from '../../assets/images/cat.jpg';
import Feed from './Feed';

const DUMMY = [
  { img: Cat, title: '타이틀', content: '여기에 글을 쓸수 있는거지' },
  { img: Cat, title: '타이틀', content: '여기에 글을 쓸수 있는거지' },
  { img: Cat, title: '타이틀', content: '여기에 글을 쓸수 있는거지' },
  { img: Cat, title: '타이틀', content: '여기에 글을 쓸수 있는거지' },
];

export default function FeedsList() {
  return (
    <div className="min-h-screen max-w-5xl w-full">
      <ul className="flex flex-col p-4 space-y-3 mt-12">
        {DUMMY.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
      </ul>
    </div>
  );
}
