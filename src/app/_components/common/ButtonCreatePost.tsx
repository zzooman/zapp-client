'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PostType } from '@/app/_lib/types/types';
import { useRecoilValue } from 'recoil';
import { authState } from '@/app/_lib/atom/auth';

interface Props {
  show: boolean;
}
export default function ButtonCreatePost({ show }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<'circle' | 'squre'>('circle');

  const auth = useRecoilValue(authState);

  const go = (type: PostType) => () => {
    console.log('auth', auth);
    if (!auth.token) {
      alert('로그인이 필요합니다.');
      return router.push('/login');
    }
    router.push(`/post/${type}`);
  };

  useEffect(() => {
    const main = document.querySelector('main')!;
    function onClick() {
      setStatus('circle');
    }
    if (status === 'squre') {
      main.addEventListener('touchstart', onClick);
    }
    return () => {
      main.removeEventListener('touchstart', onClick);
    };
  }, [status]);

  return (
    <AnimatePresence>
      {show && status === 'circle' && (
        <motion.button
          onClick={() => setStatus('squre')}
          className="absolute bottom-[12%] right-[10%] z-30 flex justify-center items-center bg-point-500 text-white rounded-full w-12 h-12 active:scale-90 transition-all"
          layoutId="1"
          transition={{
            duration: 0.1,
          }}
        >
          <FontAwesomeIcon icon={faPlus} size="1x" />
        </motion.button>
      )}
      {show && status === 'squre' && (
        <motion.div
          className="flex flex-col justify-center items-center absolute bottom-[12%] right-[10%] z-30 gap-2 font-bold"
          layoutId="1"
          transition={{
            duration: 0.1,
          }}
        >
          <div
            className="flex justify-center items-center bg-point-500 p-2 min-w-max w-20 cursor-pointer"
            onClick={go('feed')}
          >
            글쓰기
          </div>
          <div
            className="flex justify-center items-center bg-point-500 p-2 min-w-max w-20 cursor-pointer"
            onClick={go('product')}
          >
            물건 팔기
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
