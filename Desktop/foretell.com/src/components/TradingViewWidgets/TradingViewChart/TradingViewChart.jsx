import React, { useEffect, useRef } from 'react';
// import { property } from '../property.js';
import './TradingViewChart.css';

let tvScriptLoadingPromise;

const TradingViewChart = ({symbol}) => {
  const onLoadScriptRef = useRef();

  useEffect( () => {
      const tempo ={
        symbol: symbol,
        width: "100%",
        height: "100%",
        interval: "D",
        timezone: "Asia/Kolkata",
        theme: "light",
        style: "3",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        hide_top_toolbar: true,
        save_image: false,
        container_id: "tradingview_31126"
      };

      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_31126') && 'TradingView' in window) {
          // property[2].symbol=symbol;
          new window.TradingView.widget(tempo);
        }
      }
    },  
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_31126' className='chart_tab'/>
    </div>
  );
}

export default TradingViewChart
