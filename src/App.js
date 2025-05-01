import './App.css'; // Or your preferred styling
import Navbar from './components/navbar';
import Card from './components/cards/cards';
import CarouselMain from './components/carousel/carousel';
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {

  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      const currentPage = pageRef.current.getPage();
      console.log("Current page from Navbar ref:", currentPage);

      if (currentPage === 1) {
        console.log("Page is indeed 1");
      } else {
        console.log("Page is NOT 1, it is:", currentPage);
      }
    } else {
       console.log("pageRef.current is not assigned yet.");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <CarouselMain />
      <Card />
    </div>
  );
}

export default App;