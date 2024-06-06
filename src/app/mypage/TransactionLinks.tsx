import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBasketShopping, faTableList } from '@fortawesome/free-solid-svg-icons';

export default function TransactionLinks() {
  return (
    <section className="flex flex-col mt-10">
      <h2 className="font-bold text-md">나의 거래</h2>
      <ul className="flex flex-col gap-4 mt-4">
        <Link href="/mypage/like-list">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faHeart} />
            <span>관심목록</span>
          </li>
        </Link>
        <Link href="/mypage/sell-list">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTableList} />
            <span>판매내역</span>
          </li>
        </Link>
        <Link href="/mypage/bay-list">
          <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faBasketShopping} />
            <span>구매내역</span>
          </li>
        </Link>
      </ul>
    </section>
  );
}
