import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const CartRemote = React.lazy(() => import('cartApp/Cart'));

export const Cart = ({ ...props }) => {
  return (
    <ErrorBoundary fallback={<div>Failed to load module</div>}>
      <React.Suspense fallback="Loading Cart">
        <CartRemote {...props} />
      </React.Suspense>
    </ErrorBoundary>
  );
};
