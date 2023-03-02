import React from 'react'
import './Ov_chart.css';
import TradingViewChart from '../../../TradingViewWidgets/TradingViewChart/TradingViewChart';

const Ov_chart = ({symbol}) => {
  return (
    <div className="ov-chart">
      <h3>Chart++</h3>
      <div className="ov-chart-content">
        <TradingViewChart symbol={symbol}/>
      </div>   
    </div>
  )
}

export default Ov_chart