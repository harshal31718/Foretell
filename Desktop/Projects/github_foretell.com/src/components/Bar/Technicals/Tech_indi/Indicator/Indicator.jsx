import React from 'react'
import './Indicator.css';

const Indicator = ({heading}) => {
  return (
    <div className='indicator'>
      <p>{heading}</p>
      {/* <img src={ov_tech} alt="logo" /> */}
    </div>
  )
}

export default Indicator
