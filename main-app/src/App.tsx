//@ts-nocheck
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';
import { Cart } from './Cart';
import { History } from './History';
import { Shop } from './Shop';
import useCart from './store/cart';
import useHistoryStore from './store/history';

function App() {
  const { addToHistory } = useHistoryStore();
  const { clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route
          path="/my-cart"
          element={
            <Cart
              onComplete={(purchase) => {
                toast('Checkout complete!');
                addToHistory(purchase);
                clearCart();
                navigate('/history');
              }}
            />
          }
        />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  const { cart } = useCart();

  return (
    <main className="px-4">
      <header className="flex py-10 gap-4 items-center">
        <span className="text-4xl uppercase font-bold">
          <Link to="/"> My Incredible MFE Shop </Link>
        </span>
        <ul className="uppercase flex gap-2 font-semibold">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/my-cart/">My Cart</Link>
          </li>
          <li>
            <Link to="/history/">History</Link>
          </li>
        </ul>
        <div>{cart.length} items on your cart</div>
      </header>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default App;
