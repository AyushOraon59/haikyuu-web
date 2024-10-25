import React from 'react'
import './loginsignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const loginsignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">SIGN UP</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input">
          <img src={user_icon} alt="user icon"/>
          <input type="text" />
        </div>

        <div className="input">
          <img src={email_icon} alt="user icon"/>
          <input type="email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="user icon"/>
          <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default loginsignup
