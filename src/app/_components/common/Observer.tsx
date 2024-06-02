'use client';
import { useEffect, useRef } from 'react';

interface Props {
  onShow: () => void;
  onHide: () => void;
}
export default function Observer({ onShow, onHide }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          onShow();
        } else {
          onHide();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onShow, onHide]);
  return <div ref={ref} />;
}
