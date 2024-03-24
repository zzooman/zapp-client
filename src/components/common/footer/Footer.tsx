'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '../Container';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faFire, faHouse, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [down, setDown] = useState(false);
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
      className={`absolute bottom-0 left-0 w-full h-16 border-t-[1px] border-t-slate-600 bg-slate-900 transition-opacity ${
        down ? 'opacity-50' : 'opacity-1'
      }`}
    >
      <Container>
        <nav className="flex justify-around items-center h-16" onClick={() => setDown(false)}>
          <Link href="/">
            <FontAwesomeIcon icon={faHouse} color="#777777" />
          </Link>
          <Link href="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#777777" />
          </Link>
          <Link href="/hot">
            <FontAwesomeIcon icon={faFire} color="#777777" />
          </Link>
          <Link href="/alram">
            <FontAwesomeIcon icon={faLocationDot} color="#777777" />
          </Link>
          <Link href="/messages">
            <FontAwesomeIcon icon={faComment} color="#777777" />
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
