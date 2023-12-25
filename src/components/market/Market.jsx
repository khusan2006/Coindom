import React, { useEffect, useState } from 'react';
import './market.css';
import useCurrency from '../../hooks/useCurrency';
import MarketItem from '../marketItem/MarketItem';
import { NavLink } from 'react-router-dom';
const CURRENCIES_PER_PAGE = 10;
const Market = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {currencies} = useCurrency(50);
  const [pages, setPages] = useState(0);
  const currentCurrencies = [...currencies].splice(currentPage * CURRENCIES_PER_PAGE, 10)

  useEffect(() => {
    setPages(currencies.length/CURRENCIES_PER_PAGE)
  }, [currencies])
  const handleClick = (state) => {
 
    if(state === 'next') { 
      if(currentPage === pages -1) return 
      setCurrentPage(prev => prev+1)
    }else{
      if(currentPage === 0) return  
      setCurrentPage(prev => prev-1)
    }
    scrollMarket()
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 900,
      behavior: "smooth",
    });
  };
  return (
    <section id="market" className='market'>
      <h2 className='market-title'>
        Market Update
      </h2>
      <div className="table-wrapper">
      <div className="market-top">
        <p>Currency</p>
        <p>Price</p>
        <p>24h change</p>
        <p>Market Cap</p>
      </div>
  
     {currentCurrencies.map(currency => (
        <NavLink className='link' to={`/${currency.name}`}>
            <MarketItem currency={currency}  key={currency.name} />
        </NavLink>
      ))}
      </div>


      <div className='pagination'>
        <p className='previous' onClick={() => handleClick('previous')}>previous</p>
        {currencies && new Array(pages).fill(0).map((_, index) => (
          <p onClick={() => {setCurrentPage(index); scrollMarket()}} key={index} className={`${currentPage === index ? 'active' : ''}`}>{index + 1 }</p>
        ))}
        <p className='next' onClick={() => handleClick('next')}>next</p>
      </div>
    </section>
  )
}

export default Market
