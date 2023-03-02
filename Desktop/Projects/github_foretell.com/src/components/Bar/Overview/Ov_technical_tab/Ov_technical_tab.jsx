import React from 'react'
import TradingViewIndicator from '../../../TradingViewWidgets/TradingViewIndicator/TradingViewIndicator';
import './Ov_technical_tab.css';

const Ov_technical = ({symbol}) => {
  return (
    <div className="ov-tech_tab">
     <h3>Technicals</h3>
      <div className="ov-tech_tab-content">
        <TradingViewIndicator symbol={symbol}/>
      </div> 
    </div>
  )
}

export default Ov_technical