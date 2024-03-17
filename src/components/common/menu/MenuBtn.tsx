'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Menu from './Menu';
import Dim from '../Dim';

export default function MenuBtn() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center w-10 aspect-square" onClick={() => setOpen(prev => !prev)}>
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </div>
      <AnimatePresence>
        {open && (
          <>
            <Menu close={() => setOpen(false)} />
            <Dim close={() => setOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
