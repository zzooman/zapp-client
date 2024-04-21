'use client';

import useOverlay from '@/lib/useOverlay/useOverlay';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

interface Media {
  type: 'image' | 'video';
  url: string;
}

export function UploadMedia() {
  const [medias, setMedias] = useState(new Map<number, Media>());
  const overlay = useOverlay();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      if (file.type.includes('video')) {
        fileReader.onload = () => {
          const videoUrl = URL.createObjectURL(file);
          setMedias(prev => {
            const cloned = new Map(prev);
            return cloned.set(cloned.size, { type: 'video', url: videoUrl });
          });
        };
      } else {
        fileReader.onload = () => {
          setMedias(prev => {
            const cloned = new Map(prev);
            return cloned.set(cloned.size, { type: 'image', url: fileReader.result as string });
          });
        };
      }
      fileReader.readAsDataURL(file);
    }
  };

  const showMedia = (media: Media) => () => {
    overlay.open(({ isOpen, close }) => <div>good</div>);
  };

  return (
    <section className="flex space-x-2 px-4">
      <div className="flex justify-center items-center opacity-80 h-16 aspect-square border rounded-md">
        <input id="uploadMedia" type="file" accept="image/*, video/*" hidden onInput={onInput} />
        <label htmlFor="uploadMedia" className="flex flex-col gap-1 justify-center items-center cursor-pointer">
          <FontAwesomeIcon icon={faCameraRetro} />
          <span className="text-xs">
            <strong className="text-point-400">{medias.size}</strong> / 10
          </span>
        </label>
      </div>
      {Array.from(medias).map(([n, media], i) => (
        <div key={i} className="relative h-16 aspect-square border rounded-md overflow-hidden">
          {media.type === 'image' ? (
            <Image src={media.url} alt="media" objectFit="cover" layout="fill" onClick={showMedia(media)} />
          ) : (
            <video
              src={media.url}
              autoPlay
              className="absolute left-0 top-0 w-full aspect-square object-cover"
              onClick={showMedia(media)}
            />
          )}
        </div>
      ))}
    </section>
  );
}
