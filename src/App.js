import './App.css'; // Or your preferred styling
import Navbar from './components/navbar';
import Card from './components/cards/cards';
import CarouselMain from './components/carousel/carousel';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log("Page changed to:", newPage);
  };

  return (
    <div>
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      {currentPage === 0 ? <Card /> : <CarouselMain />}
    </div>
  );
}

export default App;