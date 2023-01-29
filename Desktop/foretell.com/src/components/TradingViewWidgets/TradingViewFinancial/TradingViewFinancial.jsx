import React from 'react';

const tempo = {
  "colorTheme": "light",
  "isTransparent": false,
  "largeChartUrl": "",
  "displayMode": "regular",
  "width": "100%",
  "height": 450,
  "symbol": "",
  "locale": "en"
};

class TradingViewFinancial extends React.Component {
  constructor({ symbol }) {
    super(symbol);
    this.symbol = symbol;
    tempo.symbol = this.symbol;
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js"
    script.async = true;
    script.innerHTML = JSON.stringify(tempo)
    document.getElementById("myContainer2").appendChild(script);
  }

  render() {
    return(
      <div id="myContainer2">
        {/* <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div> */}
      </div>
    );
  }
}




export default TradingViewFinancial

