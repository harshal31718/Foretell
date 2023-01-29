import React from 'react';

const tempo = {
  "interval": "1m",
  "width": "100%",
  "isTransparent": false,
  "heigh": 450,
  "symbol": "",
  "showIntervalTabs": true,
  "locale": "en",
  "colorTheme": "light"
};

class TradingViewIndicator extends React.Component {
  constructor({ symbol }) {
    super(symbol);
    this.symbol = symbol;
    tempo.symbol = this.symbol;
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
    script.async = true;
    script.innerHTML = JSON.stringify(tempo)
    document.getElementById("myContainer").appendChild(script);
  }

  render() {
    return (
      <div id="myContainer">
        {/* <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div> */}
      </div>
    );
  }
}

export default TradingViewIndicator

