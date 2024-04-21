import BackBtn from './BackBtn';
import LocationBtn from './location/LocationBtn';
import MenuBtn from './menu/MenuBtn';

interface Props {
  back?: boolean;
  menu?: boolean;
  location?: boolean;
  title?: string;
}
export default function Header({ back, menu, location, title }: Props) {
  return (
    <>
      <header
        className={`absolute left-0 top-0 flex justify-between items-center h-[50px] w-full max-w-5xl m-auto bg-slate-900 z-50`}
      >
        {back && <BackBtn />}
        {menu && <MenuBtn />}
        {location && <LocationBtn />}
        {title && <h1 className="absolute left-[50%] translate-x-[-50%] text-white font-bold">{title}</h1>}
      </header>
    </>
  );
}
