import React from 'react'
import './Overview.css';
import { data } from '../../../assets/stock_data.js';
import Ov_chart from './Ov_chart/Ov_chart';
import Ov_technical_tab from './Ov_technical_tab/Ov_technical_tab';
import Ov_fundamental_tab from './Ov_fundamental_tab/Ov_fundamental_tab';

const Overview = ({symbol}) => {

  return (
    <div className="ft__overview">
      <div>
        <Ov_chart symbol={symbol}/>
      </div>
      <div>
        <Ov_technical_tab symbol={symbol}/>
        <Ov_fundamental_tab symbol={symbol}/> 
      </div>
    </div>
  )
}

export default Overview
