import './App.css'; // Or your preferred styling
import Navbar from './components/navbar';
import Card from './components/cards/cards';
import CarouselMain from './components/carousel/carousel';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log("Current page:", currentPage);
  }, [currentPage]);

  if (currentPage === 0) {
    return (
      <div>
        <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
        <Card />
        <CarouselMain />
      </div>
    );
  } else if (currentPage === 1) {
    return (
      <div>
        <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      </div>
    );
  } else {
    return (
      <div>Invalid page</div>
    );
  }
}

export default App;