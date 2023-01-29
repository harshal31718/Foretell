import React from 'react'
import './Tech_mavg.css';

const Tech_mavg = () => {
  return (
    <div className='tech-mavg'>
      <div className="title-1">
        <a>Moving Averages</a>
      </div>
      <div className="tech-mavg-content">
        <table className='tech-mavg-content-table'>
          <thead >
            <th >Name</th>
            <th >Value</th>
            <th >Action</th>
          </thead>
          <tbody>
              {/* { data.map((users,i) => (
                <tr key={data.id}  >
                  <td >{data[i].company_name}</td>
                  <td >{data[i].market_price}</td>
                  <td >{data[i].change}</td>
                  <td >{data[i].volume}</td>
                  <td >{data[i].market_cap}</td>
                </tr>
                ))  
              } */}
              <tr>
                <td>Exponential Moving Average (10)</td>
                <td>2484.10</td>
                <td>Sell</td>
              </tr>
              <tr>
                <td>Simple Moving Average (10)</td>
                <td>2300</td>
                <td>Sell</td>
              </tr>
              <tr>
                <td>Exponential Moving Average (20)</td>
                <td>2484.10</td>
                <td>Buy</td>
              </tr>
              <tr>
                <td>Simple Moving Average (20)</td>
                <td>2484.10</td>
                <td>Sell</td>
              </tr>
              <tr>
                <td>Exponential Moving Average (50)</td>
                <td>2484.10</td>
                <td>Sell</td>
              </tr>
              <tr>
                <td>Simple Moving Average (50)</td>
                <td>2484.10</td>
                <td>Buy</td>
              </tr>
              <tr>
                <td>Exponential Moving Average(100)</td>
                <td></td>
                <td>Sell</td>
              </tr>
              <tr>
                <td>Simple Moving Average (100)</td>
                <td>2484.10</td>
                <td>Buy</td>
              </tr>
              <tr>
                <td>Exponential Moving Average (200)</td>
                <td>2484.10</td>
                <td>Buy</td>
              </tr>
              <tr>
                <td>Simple Moving Average (200)</td>
                <td>2484.10</td>
                <td>Sell</td>
              </tr>
            </tbody>
          </table>
        </div> 
    </div>
  )
}

export default Tech_mavg
