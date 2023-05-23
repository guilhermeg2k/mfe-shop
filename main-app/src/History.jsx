import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const HistoryRemote = React.lazy(() => import('historyApp/History'));

export const History = () => {
  return (
    <ErrorBoundary fallback={<div>Failed to load module</div>}>
      <React.Suspense fallback="Loading History">
        <HistoryRemote />
      </React.Suspense>
    </ErrorBoundary>
  );
};
