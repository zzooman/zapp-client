'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Media } from '../../post/uploadMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  media: Media;
}
export default function UploadedMediaModal({ isOpen, onClose, media }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          open
          className="fixed left-0 top-0 z-50 w-full h-screen bg-black"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={onClose}
            className="absolute right-5 top-6 text-white z-[100] h-8 cursor-pointer"
          />
          <section className="flex justify-center items-center w-full h-full">
            {media.type === 'image' && <img src={media.url} alt="image" className="w-full" />}
            {media.type === 'video' && <video src={media.url} autoPlay controls className="w-full" />}
          </section>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
}
