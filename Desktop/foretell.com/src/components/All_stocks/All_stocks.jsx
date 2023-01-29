import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import './All_stocks.css';
import { data } from '../../assets/stock_data.js';
import { NavLink } from 'react-router-dom';


const All_stocks = () => {
  function sorting(col) { };

  return (
    <div className='allstocks'>
      <h3>All Stocks</h3>
      <div className='as-container'>
        <table className='table'>
          <thead>
            <th onClick={() => sorting("compamy_name")} >Company Name</th>
            <th onClick={() => sorting("market_price")} >Market Price</th>
            <th onClick={() => sorting("change")} >% Change</th>
            <th onClick={() => sorting("volume")} >24h Volume</th>
            <th onClick={() => sorting("market_cap")} >Market Cap</th>
          </thead>
          <tbody>
            {data.map((users, i) => (
              <tr key={data[i].id}  >
                <td ><NavLink to='/stock' state={{ symbol: data[i].symbol }}><p>{data[i].name}</p></NavLink></td>
                <td ><NavLink to='/stock' state={{ symbol: data[i].symbol }}><p><FaRupeeSign/>{data[i].market_price}</p></NavLink></td>
                <td ><NavLink to='/stock' state={{ symbol: data[i].symbol }}><p>{data[i].change_percent}%</p></NavLink></td>
                <td ><NavLink to='/stock' state={{ symbol: data[i].symbol }}><p>{data[i].volume}</p></NavLink></td>
                <td ><NavLink to='/stock' state={{ symbol: data[i].symbol }}><p>{data[i].market_cap} Cr</p></NavLink></td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default All_stocks
