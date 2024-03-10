import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-container-list">
            <h1>About Us</h1>
            <p>At XYZ, we blend financial expertise with a clientcentric approach.
               With a legacy of trust and
              innovation, we've emerged as a beacon
               of financial excellence.</p>
               <FaLinkedinIn />  <TfiYoutube />
          </div>
          <div className="footer-container-list-1">
            <h1>Our Solution</h1>
            
              <p>For Companies</p>
              <p>For HNIs</p>
              <p>Training Solutions</p>
            
          </div>
          <div className="footer-container-list-2">
              <h1>Contact Us</h1>
          
              <p>Call: +91-9462003366</p>
              <p>Mail: info@xyz.com</p>
            
          </div>

        </div>
        <div className="footer-end">
          <span>COPYRIGHT 2024 | ALL RIGHTS RESERVED</span>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
