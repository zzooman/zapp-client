import MenuBtn from '../menu/MenuBtn';
import BackBtn from './BackBtn';

interface Props {
  fixed?: boolean;
  back?: boolean;
  menu?: boolean;
  title?: string;
}
export default function Header({ fixed, back, menu, title }: Props) {
  return (
    <>
      <header
        className={`${
          fixed && 'fixed'
        } flex justify-between items-center h-[50px] w-full max-w-5xl m-auto bg-slate-900 z-50`}
      >
        {back && <BackBtn />}
        {menu && <MenuBtn />}
        {title && <h1 className="absolute left-[50%] translate-x-[-50%] text-white font-bold">{title}</h1>}
      </header>
    </>
  );
}
