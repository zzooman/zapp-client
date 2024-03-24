import Container from '@/components/common/Container';
import Header from '@/components/common/header/Header';
import Image from 'next/image';
import Cat from '@/assets/images/cat.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as Heart, faBookmark as Bookmark, faChartSimple, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as LineHeart, faBookmark as LineBookmark, faComment } from '@fortawesome/free-regular-svg-icons';

export default function FeedDetail() {
  return (
    <Container>
      <Header back title="Post" />
      <main className="mt-[50px]">
        <section className="mt-2">
          <article className="p-3 border-b border-b-slate-100">
            <strong>작성자</strong>
            <p>글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자. 글을 써보자.</p>
            <Image src={Cat} alt="cat"></Image>
            <span className="text-sm">12:30 AM · Jan 18, 2024</span>
            <ul className="flex justify-between mt-3 space-x-4 items-center">
              <li className="flex items-center space-x-2">
                <div>
                  <FontAwesomeIcon icon={LineHeart} color="#EC407A" />
                  <span className="ml-[2px] text-sm">100k</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faChartSimple} color="#0F172A" />
                  <span className="ml-[2px] text-sm">100k</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={Bookmark} color="#0F172A" />
                <FontAwesomeIcon icon={faShare} color="#0F172A" />
              </li>
            </ul>
          </article>

          <article>
            <ul className="flex flex-col">
              <li className="flex p-3 space-x-2 border-b border-b-slate-100">
                <Image src={Cat} alt="cat" className="rounded-full object-cover w-8 h-8 aspect-square"></Image>
                <div className="flex flex-col space-y-2">
                  <div>
                    <strong>작성자</strong>
                    <span className="text-xs ml-2">15시간 전</span>
                  </div>

                  <p className="text-sm">
                    답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자.
                  </p>

                  <ul className="flex justify-between">
                    <li>
                      <div className="flex space-x-3">
                        <FontAwesomeIcon icon={faComment} color="gray" size="sm" />
                        <FontAwesomeIcon icon={LineHeart} color="gray" size="sm" />
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={Bookmark} color="gray" size="sm" />
                      <FontAwesomeIcon icon={faShare} color="gray" size="sm" />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex p-3 space-x-2 border-b border-b-slate-100">
                <Image src={Cat} alt="cat" className="rounded-full object-cover w-8 h-8 aspect-square"></Image>
                <div className="flex flex-col space-y-2">
                  <div>
                    <strong>작성자</strong>
                    <span className="text-xs ml-2">15시간 전</span>
                  </div>

                  <p className="text-sm">
                    답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자.
                  </p>

                  <ul className="flex justify-between">
                    <li>
                      <div className="flex space-x-3">
                        <FontAwesomeIcon icon={faComment} color="gray" size="sm" />
                        <FontAwesomeIcon icon={LineHeart} color="gray" size="sm" />
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={Bookmark} color="gray" size="sm" />
                      <FontAwesomeIcon icon={faShare} color="gray" size="sm" />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex p-3 space-x-2 border-b border-b-slate-100">
                <Image src={Cat} alt="cat" className="rounded-full object-cover w-8 h-8 aspect-square"></Image>
                <div className="flex flex-col space-y-2">
                  <div>
                    <strong>작성자</strong>
                    <span className="text-xs ml-2">15시간 전</span>
                  </div>

                  <p className="text-sm">
                    답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자.
                  </p>

                  <ul className="flex justify-between">
                    <li>
                      <div className="flex space-x-3">
                        <FontAwesomeIcon icon={faComment} color="gray" size="sm" />
                        <FontAwesomeIcon icon={LineHeart} color="gray" size="sm" />
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={Bookmark} color="gray" size="sm" />
                      <FontAwesomeIcon icon={faShare} color="gray" size="sm" />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex p-3 space-x-2 border-b border-b-slate-100">
                <Image src={Cat} alt="cat" className="rounded-full object-cover w-8 h-8 aspect-square"></Image>
                <div className="flex flex-col space-y-2">
                  <div>
                    <strong>작성자</strong>
                    <span className="text-xs ml-2">15시간 전</span>
                  </div>

                  <p className="text-sm">
                    답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자.
                  </p>

                  <ul className="flex justify-between">
                    <li>
                      <div className="flex space-x-3">
                        <FontAwesomeIcon icon={faComment} color="gray" size="sm" />
                        <FontAwesomeIcon icon={LineHeart} color="gray" size="sm" />
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={Bookmark} color="gray" size="sm" />
                      <FontAwesomeIcon icon={faShare} color="gray" size="sm" />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex p-3 space-x-2 border-b border-b-slate-100">
                <Image src={Cat} alt="cat" className="rounded-full object-cover w-8 h-8 aspect-square"></Image>
                <div className="flex flex-col space-y-2">
                  <div>
                    <strong>작성자</strong>
                    <span className="text-xs ml-2">15시간 전</span>
                  </div>

                  <p className="text-sm">
                    답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자. 답글을 달아보자.
                  </p>

                  <ul className="flex justify-between">
                    <li>
                      <div className="flex space-x-3">
                        <FontAwesomeIcon icon={faComment} color="gray" size="sm" />
                        <FontAwesomeIcon icon={LineHeart} color="gray" size="sm" />
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={Bookmark} color="gray" size="sm" />
                      <FontAwesomeIcon icon={faShare} color="gray" size="sm" />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </Container>
  );
}
