import React from 'react'
import './Bar.css';
import {data} from '../../assets/stock_data.js';
import Overview from './Overview/Overview';
import Profile from './Profile/Profile';
import Technicals from './Technicals/Technicals';
import Fundamentals from './Fundamentals/Fundamentals';
import Sector_competitor from './Sector_competitor/Sector_competitor';


const Bar = ({symbol}) => {
  const stock = data.find(obj => obj.symbol === symbol);

  const bar= document.getElementById("bar");
  const bar_details= document.getElementById("bar_details");
  window.addEventListener('scroll',() => {
    const currentScroll = window.pageYOffset;
    if(currentScroll>180){
      bar_details.className = "bar-details";
      bar.className ="bar freeze";
    }
    if(currentScroll<=180){
      bar_details.className = "bar-details hide";
      bar.className ="bar";
    }
  })
  function changeContent(para){
    document.getElementById("overview").className="hide";
    document.getElementById("profile").className="hide";
    document.getElementById("technicals").className="hide";
    document.getElementById("fundamentals").className="hide";
    document.getElementById("competitors").className="hide";
    document.getElementById(para).className="show";
  }

  return (
    <>
      <div id='bar' className="bar">
        <div id='bar_details' className='bar-details hide'>
          <p >
            <span STYLE="font-size:20px">{stock.name}  {stock.market_price}  </span>
            <span STYLE="font-size:12px">INR</span>
            <span STYLE="font-size:18px">  {stock.change_price} ({stock.change_percent}%)</span>
          </p>
        </div>
        <div>
          <ul>
            <li><button onClick={() => changeContent("overview")}>Overview</button></li>
            <li><button onClick={() => changeContent("profile")}>Profile</button></li>
            <li><button onClick={() => changeContent("technicals")}>Technicals</button></li>
            <li><button onClick={() => changeContent("fundamentals")}>Fundamentals</button></li>
            <li><button onClick={() => changeContent("competitors")}>Competitors</button></li>
          </ul>
        </div>
      </div>
      <div id="overview" className='show'><Overview symbol={symbol}/></div>
      <div id="profile" className='hide'><Profile symbol={symbol}/></div>
      <div id="technicals" className='hide'><Technicals symbol={symbol}/></div>
      <div id="fundamentals" className='hide'><Fundamentals symbol={symbol}/></div>
      <div id="competitors" className='hide'><Sector_competitor symbol={symbol}/></div>
    </>
  )
}

export default Bar
