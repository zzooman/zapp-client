import Container from '@/components/common/Container';
import Header from '@/components/common/header/Header';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PostGoods() {
  return (
    <Container>
      <Header back title="판매물품 등록" />
      <main className="pt-16">
        <section>
          <div className="opacity-80">
            <input id="uploadMedia" type="file" accept="image/*, video/*" hidden />
            <label
              htmlFor="uploadMedia"
              className="flex flex-col gap-1 justify-center items-center h-16 aspect-square border rounded-md cursor-pointer"
            >
              <FontAwesomeIcon icon={faCameraRetro} />
              <span className="text-xs">
                <strong>10</strong>/10
              </span>
            </label>
          </div>
        </section>
      </main>
    </Container>
  );
}
