import React from 'react'
import './Highlights_tab.css';
import Htab_List from './Htab_List';
import { data } from '../../assets/stock_data.js';

const Highlights_tab = () => {
  return (
        <div className='ft__highlights_tab'>
            <h3>Market Highlights</h3>
            <div className='ht-tabs'>
                <Htab_List heading="Indices" data={data}/>
                <Htab_List heading="Top Gainers" data={data}/>
                <Htab_List heading="Top Losers" data={data}/>
                <Htab_List heading="Top Volume" data={data}/>
            </div>
        </div>
    )
}

export default Highlights_tab
