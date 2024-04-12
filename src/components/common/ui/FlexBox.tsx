interface Props {
  children: React.ReactNode;
  col?: boolean;
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
  classNames?: string;
}
export function FlexBox({ children, classNames, justify, align, col }: Props) {
  return (
    <div
      className={`flex ${col && 'flex-col'} ${justify && `justify-${justify}`} ${
        align && `aligin-${align}`
      } ${classNames}`}
    >
      {children}
    </div>
  );
}
