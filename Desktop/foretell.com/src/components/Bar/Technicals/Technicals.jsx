import React from 'react'
import './Technicals.css';
import Tech_bar from './Tech_bar/Tech_bar';
import Tech_indi from './Tech_indi/Tech_indi';
import Tech_mavg from './Tech_mavg/Tech_mavg';
import Tech_osci from './Tech_osci/Tech_osci';
import Tech_pivot from './Tech_pivot/Tech_pivot';

const Technicals = () => {
  return (
    <div className='ft__technicals'>
      <div>
        <Tech_bar/>
      </div>
      <div>
        <Tech_indi/>
      </div>
      <div className="flex-center">
        <Tech_mavg/>
        <Tech_osci/> 
      </div>
      <div>
        <Tech_pivot/>
      </div>
    </div>
  )
}

export default Technicals
