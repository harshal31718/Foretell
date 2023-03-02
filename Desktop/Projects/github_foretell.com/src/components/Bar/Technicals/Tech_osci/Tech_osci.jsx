import React from 'react'
import './Tech_osci.css';

const Tech_osci = () => {
  return (
    <div className='tech-osci'>
      <div className="title-1">
        <a>Oscillators</a>
      </div>
      <div className="tech-osci-content">
        <table className='tech-osci-content-table'>
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
              <td >Relative Strength Index (14)</td>
              <td >36.3</td>
              <td >Neutral</td>
            </tr>
            <tr>
              <td >Relative Strength Index (14)</td>
              <td >36.3</td>
              <td >Neutral</td>
            </tr>
            <tr>
              <td >Commodity Channel Index (20)</td>
              <td >-123.33</td>
              <td >Buy</td>
            </tr>
            <tr>
              <td >Stochastic RSI Fast (3, 3, 14, 14)</td>
              <td >33.32</td>
              <td >Sell</td>
            </tr>   
            <tr>
              <td >Relative Strength Index (14)</td>
              <td >36.3</td>
              <td >Neutral</td>
            </tr>
            <tr>
              <td >Commodity Channel Index (20)</td>
              <td >-123.33</td>
              <td >Buy</td>
            </tr>
            <tr>
              <td >Stochastic RSI Fast (3, 3, 14, 14)</td>
              <td >33.32</td>
              <td >Sell</td>
            </tr>   
            <tr>
              <td >Relative Strength Index (14)</td>
              <td >36.3</td>
              <td >Neutral</td>
            </tr>
            <tr>
              <td >Commodity Channel Index (20)</td>
              <td >-123.33</td>
              <td >Buy</td>
            </tr>
            <tr>
              <td >Stochastic RSI Fast (3, 3, 14, 14)</td>
              <td >33.32</td>
              <td >Sell</td>
            </tr>   
          </tbody>
        </table>
      </div>  
    </div>
  )
}

export default Tech_osci
