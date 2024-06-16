import { Media } from '../types/types';

export class Functor<T> {
  constructor(public value: T) {}
  map<U>(f: (value: T) => U): Functor<U> {
    return new Functor(f(this.value));
  }
}
export function currency(value: number): string {
  return value.toLocaleString('ko-KR');
}
export function timeLapse(createdAt: string) {
  const now = new Date();
  createdAt = createdAt.slice(0, 19);
  const created = new Date(createdAt);

  const diff = now.getTime() - created.getTime();
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);
  if (diffDays > 0) {
    return `${diffDays}일 전`;
  } else if (diffHours > 0) {
    return `${diffHours}시간 전`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes}분 전`;
  } else {
    return `${diffSeconds}초 전`;
  }
}

export function mediasConvertor(medias: string[]): Media[] {
  return medias.map(url => ({
    type: url.includes('mp4') ? 'video' : 'image',
    url,
  }));
}
