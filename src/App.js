import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import InfoPage from './pages/InfoPage/InfoPage';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100; // Change '100' to the scroll position where you want the navbar to become fixed
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='app'>

      <BrowserRouter>
      <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path='/' element={<Home isScrolled={isScrolled} />} />
          <Route path='/:name' element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


