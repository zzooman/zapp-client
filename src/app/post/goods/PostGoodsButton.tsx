import { MouseEventHandler } from 'react';

interface Props {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}
export default function PostGoodsButton({ onSubmit }: Props) {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center h-20 w-full bg-base py-2 px-4 max-w-3xl">
      <button className="w-full h-10 bg-point-400 rounded-md cursor-pointer" onClick={onSubmit}>
        작성 완료
      </button>
    </div>
  );
}
