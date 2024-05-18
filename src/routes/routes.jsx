import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

const ListPage = lazy(() => import('../pages/ListPage'));
const CreatePage = lazy(() => import('../pages/CreatePage'));
const EditPage = lazy(() => import('../pages/EditPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage'));

const LoadingFallback = () => (
  <div className="bg-gray-900 text-white flex justify-center items-center h-screen">
    Loading...
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes >
        <Route path="" element={<Layout />} >
          <Route path="/" element={<ListPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes;
