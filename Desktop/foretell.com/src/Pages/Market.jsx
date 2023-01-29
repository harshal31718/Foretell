import React from 'react'
import Highlights_tab from '../components/Highlights_tab/Highlights_tab';
import All_stocks from '../components/All_stocks/All_stocks';

const Market = () => {
  return (
    <div className="market">
      <Highlights_tab/>
      <All_stocks/>
    </div>
  )
}

export default Market