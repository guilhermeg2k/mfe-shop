//@ts-nocheck
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import useCart from './store/cart';
import { Shop } from './Shop';
import useHistoryStore from './store/history';
import toast from 'react-simple-toasts';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Cart = React.lazy(() => import('cartApp/Cart'));
const History = React.lazy(() => import('historyApp/History'));

function App() {
  const { addToHistory } = useHistoryStore();
  const { clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route
            path="/my-cart"
            element={
              <ErrorBoundary
                fallback={<div>Failed to load dynamic module</div>}
              >
                <Cart
                  onComplete={(purchase) => {
                    toast('Checkout complete!');
                    addToHistory(purchase);
                    clearCart();
                    navigate('/history');
                  }}
                />
              </ErrorBoundary>
            }
          />
          <Route
            path="/history"
            element={
              <ErrorBoundary
                fallback={<div>Failed to load dynamic module</div>}
              >
                <History />
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </Suspense>
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
