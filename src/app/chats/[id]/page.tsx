import ChatBar from './ChatBar';

const CHATS = [
  {
    id: 1,
    message: '안녕하세요',
    isMe: false,
  },
  {
    id: 2,
    message: '안녕하세요',
    isMe: true,
  },
  {
    id: 1,
    message: '안녕하세요',
    isMe: false,
  },
  {
    id: 2,
    message: '안녕하세요',
    isMe: true,
  },
];

export default function ChatPage() {
  return (
    <main className="relative w-full p-4">
      <section>
        <ul className="flex flex-col gap-2">
          {CHATS.map(chat => {
            if (chat.isMe) {
              return (
                <li key={chat.id} className="flex justify-end gap-2">
                  <p className="p-2 rounded-lg text-xs border border-slate-500">{chat.message}</p>
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                </li>
              );
            }
            return (
              <li key={chat.id} className="flex  gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <p className="p-2 rounded-lg text-xs border border-slate-500">{chat.message}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <ChatBar />
    </main>
  );
}
