import { motion } from 'framer-motion';

interface Props {
  close: () => void;
}
export default function Dim({ close }: Props) {
  return (
    <motion.div
      id="dim"
      className="fixed left-0 top-0 w-screen h-screen z-40 bg-black"
      onClick={close}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    ></motion.div>
  );
}
