import React from 'react'
import './Footer.css';
import zuriLogo from '../images/zuri.png';
import ingLogo from '../images/ing.png';

function Footer() {
  return (
    <div className='footer'>
          <div>
              <img src={zuriLogo} alt="zuri_logo" />
          </div>

          <div className='footerText'>
              HNG Internship 9 Frontend Task
          </div>

          <div>
              <img src={ingLogo} alt="i4g_logo" />
          </div>
    </div>
  )
}

export default Footer