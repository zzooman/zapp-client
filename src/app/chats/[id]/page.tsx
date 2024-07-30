'use client';

import { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import API from '@/app/_lib/fetcher/fetcher';
import { Chat } from '@/app/_lib/types/types';
import { useRecoilValue } from 'recoil';
import { authState } from '@/app/_lib/atom/auth';

export default function ChatPage({ params }: { params: { id: string } }) {
  const auth = useRecoilValue(authState);

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    (async function fetchMessages() {
      const messages = await API.getMessages(params.id);
      if (messages.status === 200) {
        const newChats: Chat[] = messages.data.map(message => ({
          sender: message.sender,
          message: message.message,
          createdAt: message.created_at,
        }));
        setChats(newChats);
      }
    })();
  }, [params.id]);

  useEffect(() => {
    (async function fetchChat() {
      const socket = await API.enterRoom(params.id, (messageEvent: MessageEvent<string>) => {
        const [sender, message] = messageEvent.data.split(':');
        const chat: Chat = {
          message: message,
          sender: sender,
          createdAt: new Date().toISOString(),
        };
        setChats(prev => [...prev, chat]);
      });
      setSocket(socket);
    })();
  }, [setChats, params.id, setSocket]);

  return (
    <main className="relative w-full p-4">
      <section>
        <ul className="flex flex-col gap-2">
          {chats.map(chat => {
            if (chat.sender === auth.username) {
              return (
                <li key={chat.createdAt} className="flex gap-2">
                  <p className="p-2 rounded-lg text-xs border border-slate-500">{chat.message}</p>
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                </li>
              );
            }
            return (
              <li key={chat.createdAt} className="flex  gap-2 justify-end">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <p className="p-2 rounded-lg text-xs border border-slate-500">{chat.message}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <ChatBar socket={socket} />
    </main>
  );
}
