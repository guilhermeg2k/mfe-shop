import { items } from './data/items';
import useCart from './store/cart';

export const Shop = () => {
  const { addToCart } = useCart();

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Shop</h1>
      <div className="flex justify-between flex-wrap">
        {items.map((item) => {
          return (
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold">{item.name}</div>
              <div>
                <img src={item.url} alt={`Image of ${item.name}`} />
              </div>
              <div>R$ {item.price}</div>
              <button
                className="bg-emerald-400 px-4 py-2 rounded-md"
                onClick={() => addToCart(item)}
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
