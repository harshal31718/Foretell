import React from 'react'
import Details from '../components/Details/Details'
import Bar from '../components/Bar/Bar'
import  { useLocation } from "react-router-dom";


const Stock = (props) => {
  const location = useLocation();
const symbol = location.state.symbol;
  return (
    <div className="stock">
      <Details symbol={symbol}/>
      <Bar symbol={symbol}/>
    </div>
  )
}

export default Stock