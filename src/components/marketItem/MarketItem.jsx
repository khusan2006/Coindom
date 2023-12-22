import React from 'react';
import './marketItem.css';
import { formatNumber } from '../../utils/formatNumber';
const MarketItem = ({currency}) => {
  return (
    <div className='market-item'>
      <p>
        <img src={currency.iconUrl} alt={currency.name} />
        <span>{currency.name}</span>
      </p>
      <p>${formatNumber(Number(currency.price))}</p>
      <p className={currency.change.includes("-") ? "red" : "green"}>{currency.change}%</p>
      <p>${currency.marketCap}</p>
    </div>
  )
}

export default MarketItem
