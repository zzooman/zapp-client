'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { AnimatePresence, motion } from 'framer-motion';
import { PostType } from '@/app/_lib/types/types';

interface Props {
  show: boolean;
}
export default function ButtonCreateFeed({ show }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<'circle' | 'squre'>('circle');

  const [cookie, _] = useCookies(['auth_token']);

  const go = (type: PostType) => () => {
    if (!cookie.auth_token) return router.push('/login');
    router.push(`/post/${type}`);
  };

  return (
    <AnimatePresence>
      {show && status === 'circle' && (
        <motion.button
          onClick={() => setStatus('squre')}
          className="absolute bottom-[12%] right-[10%] z-30 flex justify-center items-center bg-point-500 text-white rounded-full w-12 h-12 active:scale-90 transition-all"
          layoutId="1"
        >
          <FontAwesomeIcon icon={faPlus} size="1x" />
        </motion.button>
      )}
      {show && status === 'squre' && (
        <motion.div
          className="flex flex-col justify-center items-center absolute bottom-[12%] right-[10%] z-30 gap-2 font-bold"
          layoutId="1"
        >
          <div className="flex justify-center items-center bg-point-500 p-2 min-w-max w-20" onClick={go('feed')}>
            글쓰기
          </div>
          <div className="flex justify-center items-center bg-point-500 p-2 min-w-max w-20" onClick={go('product')}>
            물건 팔기
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
