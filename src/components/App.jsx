import Loader from 'components/Loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="*" element={<AuthPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
