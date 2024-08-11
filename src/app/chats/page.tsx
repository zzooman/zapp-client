import { cookies } from 'next/headers';
import Footer from '../_components/common/footer/Footer';
import ChatTypeTab from './ChatTypeTab';
import RoomList from './RoomList';
import { redirect } from 'next/navigation';

export default async function ChatsPage() {
  const cookie = cookies();
  const token = cookie.get('auth_token');
  if (!token) redirect('/login');
  return (
    <>
      <main className="p-4">
        <ChatTypeTab />

        <RoomList />
      </main>
      <Footer />
    </>
  );
}
