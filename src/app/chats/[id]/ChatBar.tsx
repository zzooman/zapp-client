import { Chat } from '@/app/_lib/types/types';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';

interface Params {
  socket: WebSocket | null;
  setChats: Dispatch<SetStateAction<Chat[]>>;
  username: string;
}
export default function ChatBar({ socket, setChats, username }: Params) {
  const [message, setMessage] = useState('');
  const onSubmit: FormEventHandler = e => {
    if (!socket) return;
    e.preventDefault();
    socket.send(message);
    setChats((prev: Chat[]) => [...prev, { message, sender: username, createdAt: new Date().toISOString() }]);
    setMessage('');
  };

  return (
    <form
      className="fixed left-[50%] bottom-0 w-full max-w-3xl transform -translate-x-[50%] flex items-center justify-between gap-3 p-4"
      onSubmit={onSubmit}
    >
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
