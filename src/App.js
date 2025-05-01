import './App.css'; // Or your preferred styling
import Navbar from './components/navbar';
import Card from './components/cards/cards';
import CarouselMain from './components/carousel/carousel';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log("Current page changed to:", newPage);
  };

  useEffect(() => {
    console.log("Current page:", currentPage);
  }, [currentPage]);

  return (
    <div>
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      {currentPage === 0 ? <Card /> : <CarouselMain />}
    </div>
  );
}

export default App;