'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '../Container';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faComment as lineComment, faUser as lineUser } from '@fortawesome/free-regular-svg-icons';
import { faBoxOpen, faComment, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const [down, setDown] = useState(false);

  const path = usePathname();
  const currentY = useRef(0);

  useEffect(() => {
    document.addEventListener('touchstart', touchStartHandler);
    document.addEventListener('touchend', touchEndHandler);
    return () => {
      document.removeEventListener('touchstart', touchStartHandler);
      document.removeEventListener('touchend', touchEndHandler);
    };
  }, []);

  const touchStartHandler = (e: TouchEvent) => {
    currentY.current = window.scrollY;
  };

  const touchEndHandler = (e: TouchEvent) => {
    if (currentY.current > window.scrollY) setDown(false);
    if (currentY.current < window.scrollY) setDown(true);
  };

  return (
    <footer
      className={`absolute bottom-0 left-0 w-full z-30 h-16 border-t-[1px] border-t-slate-600 bg-slate-900 transition-opacity ${
        down ? 'opacity-50' : 'opacity-1'
      }`}
    >
      <Container>
        <nav className="flex justify-around items-center h-16" onClick={() => setDown(false)}>
          <Link href="/" className="w-full flex justify-center items-center">
            <FontAwesomeIcon icon={faHouse} color={path === '/' ? '#fff' : '#555'} />
          </Link>
          <Link href="/products" className="w-full flex justify-center items-center">
            <FontAwesomeIcon icon={faBoxOpen} color={path.includes('products') ? '#fff' : '#555'} />
          </Link>
          <Link href="/search" className="w-full flex justify-center items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} color={path.includes('search') ? '#fff' : '#555'} />
          </Link>
          <Link href="/chats?tab=all" className="w-full flex justify-center items-center">
            <FontAwesomeIcon
              icon={path.includes('chats') ? faComment : lineComment}
              color={path.includes('chats') ? '#fff' : '#555'}
            />
          </Link>
          <Link href="/mypage" className="w-full flex justify-center items-center">
            <FontAwesomeIcon
              icon={path === '/mypage' ? faUser : lineUser}
              color={path === '/mypage' ? '#fff' : '#555'}
            />
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
