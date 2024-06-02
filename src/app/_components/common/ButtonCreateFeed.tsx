'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

interface Props {
  show: boolean;
}
export default function ButtonCreateFeed({ show }: Props) {
  const router = useRouter();
  const [cookie, _] = useCookies(['auth_token']);

  const go = () => {
    if (!cookie.auth_token) {
      router.push('/login');
      return;
    }
    router.push('/post/products');
  };

  return (
    <>
      {show && (
        <button
          onClick={go}
          className="absolute bottom-[12%] right-[10%] z-30 flex justify-center items-center bg-point-400 text-white rounded-full w-12 h-12 active:scale-90 transition-all"
        >
          <FontAwesomeIcon icon={faPlus} size="1x" />
        </button>
      )}
    </>
  );
}
