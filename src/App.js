import React, { lazy, Suspense } from 'react';
import './App.css'; 
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Questions from './components/questions/questions';

const Card = lazy(() => import('./components/cards/cards'));
const CarouselMain = lazy(() => import('./components/carousel/carousel'));
const CardDetail = lazy(() => import('./components/cards/CardDetail'));

function Layout() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route index element={<CarouselMain />} />
          <Route path="prices" element={<Card />} />
          <Route path="card/:id" element={<CardDetail />} />
          <Route path="questions" element={<Questions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;