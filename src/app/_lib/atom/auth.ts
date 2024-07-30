import { atom } from 'recoil';

interface Auth {
  token: string;
  username: string;
}
export const authState = atom<Auth>({
  key: 'auth',
  default: {
    token: '',
    username: '',
  },
});
