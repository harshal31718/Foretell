import React from 'react'
import TradingViewFinancial from '../../../TradingViewWidgets/TradingViewFinancial/TradingViewFinancial';
import './Ov_fundamental_tab.css';

const Ov_fundamental = ({symbol}) => {
  return (
    <div className="ov-fund_tab">
      <h3>Fundamentals</h3>
      <div className="ov-fund_tab-content">
        <TradingViewFinancial symbol={symbol}/>
      </div> 
    </div>
  )
}

export default Ov_fundamental
