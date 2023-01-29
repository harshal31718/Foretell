import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <a href="#home">
          <img src='./images/ft_logo.jpg' alt="logo" />
          <p>foretell.com</p>
        </a>
      </div>
      <div className="footer-content">
        <div >
          <p className='footer-content-head'>About Us</p>
          <p>Privacy</p>
          <p>Terms of Use</p>
        </div>
        <div >
          <p className='footer-content-head'>Products</p>
          <p>Chart++</p>
          <p>Algorithms</p>
        </div>
        <div >
          <p className='footer-content-head'>Products</p>
          <p>Chart++</p>
          <p>Algorithms</p>
        </div>
        <div >
          <p className='footer-content-head'>Contact Us</p>
          <p>Bussines</p>
          <p>Advertising</p>
          <p>Feedback</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
