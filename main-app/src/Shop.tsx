import { items } from './data/items';
import useCart from './store/cart';
import toast from 'react-simple-toasts';

export const Shop = () => {
  const { addToCart } = useCart();

  return (
    <main className="flex flex-col gap-5 p-4">
      <h1 className="text-2xl font-semibold">Shop</h1>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="font-semibold max-w-[400px]">{item.name}</div>
              <div className="w-60 flex items-center justify-center">
                <img src={item.url} alt={`Image of ${item.name}`} />
              </div>
              <div>R$ {item.price}</div>
              <button
                className="bg-emerald-400 px-4 py-2 rounded-md"
                onClick={() => {
                  addToCart(item);
                  toast('Item added to cart!');
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};
