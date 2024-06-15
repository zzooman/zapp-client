import Image from 'next/image';
import Link from 'next/link';
import Footer from '../_components/common/footer/Footer';

export default async function ChatsPage() {
  return (
    <>
      <main className="p-4">
        <ul className="mt-10 flex gap-2">
          <li className="border border-slate-700 px-3 py-1 rounded-full text-sm">전체</li>
          <li className="border border-slate-700 px-3 py-1 rounded-full text-sm">판매</li>
          <li className="border border-slate-700 px-3 py-1 rounded-full text-sm">구매</li>
        </ul>
        <ul className="flex flex-col w-full mt-6 gap-6">
          <Link href={`/chats/101`} className="flex gap-2 h-14 w-full cursor-pointer">
            <Image
              src="/images/cat.jpg"
              width={54}
              height={54}
              alt="image"
              className="rounded-full object-cover aspect-square"
            />
            <div className="flex flex-col justify-around  w-full">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">고양이</span>
                <span className="text-xs text-slate-500">2021-10-10</span>
              </div>
              <p className="text-sm truncate w-[calc(100%-50px)] text-slate-200">
                고양이가 말을하네. 고양이가 말을하네. 고양이가 말을하네
              </p>
            </div>
          </Link>
          <Link href={`/chats/101`} className="flex gap-2 h-14 w-full">
            <Image
              src="/images/cat.jpg"
              width={54}
              height={54}
              alt="image"
              className="rounded-full object-cover aspect-square"
            />
            <div className="flex flex-col justify-around  w-full">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">고양이</span>
                <span className="text-xs text-slate-500">2021-10-10</span>
              </div>
              <p className="text-sm truncate w-[calc(100%-50px)] text-slate-200">
                고양이가 말을하네. 고양이가 말을하네. 고양이가 말을하네
              </p>
            </div>
          </Link>
          <Link href={`/chats/101`} className="flex gap-2 h-14 w-full">
            <Image
              src="/images/cat.jpg"
              width={54}
              height={54}
              alt="image"
              className="rounded-full object-cover aspect-square"
            />
            <div className="flex flex-col justify-around  w-full">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">고양이</span>
                <span className="text-xs text-slate-500">2021-10-10</span>
              </div>
              <p className="text-sm truncate w-[calc(100%-50px)] text-slate-200">
                고양이가 말을하네. 고양이가 말을하네. 고양이가 말을하네
              </p>
            </div>
          </Link>
        </ul>
      </main>
      <Footer />
    </>
  );
}
