import React from 'react'
import './Footer.css'
import logo from "../Assets/cover.png"
import whatsapp from '../Assets/Whatsapp.png'
import instagram from '../Assets/Instagram.png'
import pintrest from '../Assets/pintrest.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        {/* <p>SHOPPER</p> */}
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintrest} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
