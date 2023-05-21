//@ts-nocheck

import useCart from 'mainApp/CartStore';

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Shop</h1>
      <div className="flex flex-wrap gap-10">
        {cart.map((item) => {
          return (
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold">{item.name}</div>
              <div>
                <img src={item.url} alt={`Image of ${item.name}`} />
              </div>
              <div>R$ {item.price}</div>
              <button
                className="bg-rose-700 px-4 py-2 rounded-md"
                onClick={() => removeFromCart(item)}
              >
                Remove from cart
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Cart;
