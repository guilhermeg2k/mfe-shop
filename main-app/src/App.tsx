//@ts-nocheck
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import useCart from './store/cart';
import { Shop } from './Shop';
import Cart from 'cartApp/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/history" element={<div>My History</div>} />
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
