'use client';

import { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import API from '@/app/_lib/fetcher/fetcher';
import { Chat } from '@/app/_lib/types/types';
import { useCookies } from 'react-cookie';

export default function ChatPage({ params }: { params: { id: string } }) {
  const [cookie, _] = useCookies(['zapp_username']);

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
  console.log('chats', chats);
  useEffect(() => {
    (async function fetchChat() {
      const socket = await API.enterRoom(params.id, (message: MessageEvent<string>) => {
        const chat: Chat = JSON.parse(message.data);
        console.log('chat', chat);
        setChats(prev => [...prev, chat]);
      });
      setSocket(socket);
    })();
  }, [setChats, params.id, setSocket]);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);

  return (
    <main className="relative w-full p-4">
      <section>
        <ul className="flex flex-col gap-2">
          {chats.map(chat => {
            if (chat.sender === cookie.zapp_username) {
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
      <ChatBar socket={socket} setChats={setChats} username={cookie.zapp_username} />
    </main>
  );
}
