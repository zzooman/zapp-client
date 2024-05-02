'use client';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEventHandler, useState } from 'react';

export default function ChatBar() {
  const [message, setMessage] = useState('');
  const onSubmit: FormEventHandler = e => {
    e.preventDefault();
  };

  return (
    <form className="fixed left-0 bottom-0 w-full flex items-center justify-between gap-3 p-4" onSubmit={onSubmit}>
      <input
        type="text"
        className="w-full px-3 py-[6px] rounded-full placeholder:text-sm"
        placeholder="메세지 보내기"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <button className="flex justify-center items-center w-8 h-8">
        <FontAwesomeIcon icon={faPaperPlane} className="text-point-400 h-5" />
      </button>
    </form>
  );
}
