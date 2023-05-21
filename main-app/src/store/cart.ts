import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { atomWithStorage } from 'jotai/utils';

export type Item = {
  id: number;
  name: string;
  price: number;
  url: string;
};

const cartAtom = atomWithStorage('cart', Array<Item>());

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (item: Item) => {
    const hasItem = cart.find((i) => i.id === item.id);
    if (!hasItem) {
      setCart((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (item: Item) => {
    setCart((prev) => prev.filter((i) => i.id !== item.id));
  };

  useEffect(() => {
    console.log('cart', cart);
  }, [cart]);

  return { cart, addToCart, removeFromCart };
};

export default useCart;
