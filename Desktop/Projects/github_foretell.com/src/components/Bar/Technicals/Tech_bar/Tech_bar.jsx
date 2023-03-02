import React from 'react'
import './Tech_bar.css';

const Tech_bar = () => {
    // const bar_details= document.getElementById("bar_details");
    // const bar= document.getElementById("bar");
    // window.addEventListener('scroll',() => {
    //   const currentScroll = window.pageYOffset;
    //   if(currentScroll>180){
    //     bar_details.className = "ft_bar-details"
    //     bar.className ="ft__bar freeze"
    //   }
    //   if(currentScroll<=180){
    //     bar_details.className = "ft_bar-details hide"
    //     bar.className ="ft__bar"
    //   }
    // })

    // function changeContent(para){
    //   document.getElementById("overview").className="hide";
    //   document.getElementById("profile").className="hide";
    //   document.getElementById("technicals").className="hide";
    //   document.getElementById("fundamentals").className="hide";
    //   document.getElementById("competitors").className="hide";
    //   document.getElementById(para).className="show";
    // }

  return ( 
    <>
      <div  className="tech-bar">
        <ul>
          <li><button>1 Min</button></li>
          <li><button>5 Min</button></li>
          <li><button>15 Min</button></li>
          <li><button>30 Min</button></li>
          <li><button>1 Hr</button></li>
          <li><button>3 Hr</button></li>
          <li><button>1 Day</button></li>
          <li><button>1 Week</button></li>
          <li><button>1 Month</button></li>
        </ul>
      </div>
    </>
  )
}

export default Tech_bar
