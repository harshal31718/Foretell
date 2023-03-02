import React from 'react'
import Indicator from './Indicator/Indicator'
import './Tech_indi.css';

const Tech_indi = () => {
  return (
    <div className='tech-indi'>
      <div className="title-1">
        <a>Indicators</a>
      </div>
      <div className="tech-indi-content">
        <Indicator heading="Summary"/>
        <div>
          <Indicator heading="Moving Average"/>
          <Indicator heading="Oscillator"/>
        </div>
      </div>  
    </div>
  )
}

export default Tech_indi
