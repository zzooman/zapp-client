import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faGear, faHeart, faHouse, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

interface Props {
  close: () => void;
}
export default function Menu({ close }: Props) {
  return (
    <motion.nav
      className="fixed left-0 top-0 h-screen w-[400px] max-w-[50%] z-50 bg-white text-black"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'tween', duration: 0.12 }}
    >
      <div className="absolute right-2 top-2 w-max h-max aspect-square py-[5px] px-[6px]" onClick={close}>
        <FontAwesomeIcon icon={faXmark} size="xl" />
      </div>
      <ul className="flex flex-col h-screen mt-8">
        <Link href="/" onClick={close} className="flex items-center space-x-2 p-3">
          <div className="flex w-8 justify-center items-center">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <span>Home</span>
        </Link>
        <Link href="/bookmarked" onClick={close} className="flex items-center space-x-2 p-3">
          <div className="flex w-8 justify-center items-center">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <span>북마크</span>
        </Link>
        <Link href="/bookmarked" onClick={close} className="flex items-center space-x-2 p-3">
          <div className="flex w-8 justify-center items-center">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <span>좋아요</span>
        </Link>
        <Link href="/profile" onClick={close} className="flex items-center space-x-2 p-3">
          <div className="flex w-8 justify-center items-center">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <span>프로필</span>
        </Link>
        <Link href="/setting" onClick={close} className="flex items-center space-x-2 p-3">
          <div className="flex w-8 justify-center items-center">
            <FontAwesomeIcon icon={faGear} />
          </div>
          <span>설정</span>
        </Link>
      </ul>
    </motion.nav>
  );
}
