import useCart from 'mainApp/CartStore';
import toast from 'react-simple-toasts';

const CartItem = ({ name, imgUrl, price, onRemove }) => {
  return (
    <div className="flex gap-2 ">
      <div className="w-32 ">
        <img src={imgUrl} alt={`Image of ${name}`} />
      </div>
      <div className="flex flex-col w-full justify-center">
        <div className="font-semibold ">{name}</div>
        <div className="self-end">
          <div>R$ {price}</div>
          <button
            className="bg-rose-700 px-4 py-2 rounded-md"
            onClick={onRemove}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};
const Cart = ({ onComplete }) => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">My Cart</h1>
      <div className="grid grid-cols-5 gap-5">
        <div className="flex flex-col gap-10 col-span-4">
          {cart.length === 0 && <span>Your cart is empty</span>}
          {cart.map((item) => (
            <CartItem
              name={item.name}
              imgUrl={item.url}
              price={item.price}
              onRemove={() => {
                removeFromCart(item);
                toast('Item removed from cart');
              }}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-xl">Total</h1>
          <span>R$ {totalPrice.toFixed(2)}</span>
          <button
            className="bg-emerald-400 px-4 py-2 rounded-md"
            onClick={() =>
              onComplete({
                totalPrice,
                items: cart,
                date: new Date(),
              })
            }
            disabled={cart.length === 0}
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
