import React from 'react'
import { FaRupeeSign, FaPercentage } from 'react-icons/fa'
/* <FaPercentage size={10}/> */
import { NavLink } from 'react-router-dom';
import './Htab.css';

const Htab = ({ symbol, name, market_price, change_percent }) => {
  return (
    <NavLink to='/stock' state={{ symbol }}>
      <div className='tab'>
        <p className='username'>{name}</p>
        <p className='price'> <FaRupeeSign size={10} />{market_price} </p>
        <p className='change'><span>{change_percent}</span>%</p>
      </div>
    </NavLink>
  )
}

export default Htab
