import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Item } from './cart';

export type Purchase = {
  items: Item[];
  date: Date;
};

const historyAtom = atomWithStorage('history', Array<Purchase>());

export const useHistory = () => {
  const [history, setHistory] = useAtom(historyAtom);

  const addToHistory = (purchase: Purchase) => {
    setHistory((prev) => [...prev, purchase]);
  };

  return { history, addToHistory };
};

export default useHistory;
