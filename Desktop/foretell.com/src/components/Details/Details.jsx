import React from 'react'
import {BsBookmarkPlus} from 'react-icons/bs';
import './Details.css';
import { data } from '../../assets/stock_data.js';

const Details = ({symbol}) => {
  const stock = data.find(obj => obj.symbol === symbol);

  return (
    <div>
      <div className="details">
        <div className="details-name">
          <img src="./images/reliance_logo.png" alt="logo" />
          <h3>{stock.name}</h3>
        </div>
        <div className="details-bookmark">
          <button type='button'><BsBookmarkPlus color="#000" size={30}/></button>
        </div>
        <div className="details-price">
          <h3>{stock.market_price}<span STYLE="font-size:16px"> INR</span><span STYLE="font-size:24px"> {stock.change_price} ({stock.change_percent}%)</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Details
