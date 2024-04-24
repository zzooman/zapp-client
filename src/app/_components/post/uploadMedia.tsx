'use client';
import useOverlay from '../../../lib/useOverlay/useOverlay';
import { faCameraRetro, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, {
  ForwardedRef,
  MouseEventHandler,
  MutableRefObject,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import UploadedMediaModal from '../overlay/toast/UploadedMediaModal';

export interface Media {
  type: 'image' | 'video';
  url: string;
}

export default forwardRef(function UploadMedia(props, ref: ForwardedRef<Media[]>) {
  const [medias, setMedias] = useState<Media[]>([]);
  const overlay = useOverlay();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      if (file.type.includes('video')) {
        fileReader.onload = () => {
          const videoUrl = URL.createObjectURL(file);
          setMedias(prev => [...prev, { type: 'video', url: videoUrl }]);
        };
      } else {
        fileReader.onload = () => {
          setMedias(prev => [...prev, { type: 'image', url: fileReader.result as string }]);
        };
      }
      fileReader.readAsDataURL(file);
    }
  };

  const showMedia = (media: Media) => () => {
    overlay.open(({ isOpen, close }) => <UploadedMediaModal isOpen={isOpen} onClose={close} media={media} />);
  };
  const removeMedia =
    (index: number): MouseEventHandler<SVGSVGElement> =>
    e => {
      e.stopPropagation();
      setMedias(prev => prev.filter((_, i) => i !== index));
    };

  useImperativeHandle(
    ref,
    () => {
      return medias;
    },
    [medias]
  );
  return (
    <section className="flex space-x-2 w-max">
      <div className="flex justify-center items-center opacity-80 h-20 aspect-square border rounded-md">
        <input id="uploadMedia" type="file" accept="image/*, video/*" hidden onInput={onInput} />
        <label htmlFor="uploadMedia" className="flex flex-col gap-1 justify-center items-center cursor-pointer">
          <FontAwesomeIcon icon={faCameraRetro} />
          <span className="text-xs">
            <strong className="text-point-400">{medias.length}</strong> / 10
          </span>
        </label>
      </div>
      {medias.map((media, i) => (
        <div key={i} className="relative h-20 aspect-square border rounded-md " onClick={showMedia(media)}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="absolute right-[-5px] top-[-5px] z-30 h-5"
            onClick={removeMedia(i)}
          />
          {media.type === 'image' ? (
            <Image src={media.url} alt="media" objectFit="cover" layout="fill" className="rounded-md" />
          ) : (
            <video
              src={media.url}
              autoPlay
              className="absolute left-0 top-0 w-full aspect-square object-cover rounded-md"
            />
          )}
        </div>
      ))}
    </section>
  );
});
