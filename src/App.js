import React, { lazy, Suspense } from 'react';
import './App.css'; 
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Card = lazy(() => import('./components/cards/cards'));
const CarouselMain = lazy(() => import('./components/carousel/carousel'));

const Loading = () => <div>Loading...</div>;

function Layout() {
  return (
    <div>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense>
              <CarouselMain />
            </Suspense>
          } />
          <Route path="prices" element={
            <Suspense>
              <Card />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;