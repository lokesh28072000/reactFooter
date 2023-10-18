import React from 'react'
import facebook from './images/Facebook_Logo_(2019).png'
import instagram from './images/instalogo.png'
import telegram from './images/telegram-logo.png'
import whatsapp from './images/png-transparent-computer-icons-logo-whatsapp-whatsapp-text-logo-whatsapp-icon-thumbnail.png'

export default function footer() {
  return (
    <div className='mainfooter'>
    <div className='footer'>
      <div className='footer1'>

        <h3>business</h3>
        <ul>
          <a href=""><li>about</li></a>
          <li>testimonials</li>
          <li>books</li>
          <li>docs</li>
        </ul>

      </div>
      
      <div className='footer1'>
      <h3>company</h3>
        <ul>
          <a href=""><li>address</li></a>
          <li>about</li>
          <li>services</li>
          <li>contact</li>
        </ul>
      </div>
     

      <div className='footer2'>
      <h3>social media</h3>
      
        <ul>
          <a href=""><li><img src={facebook} alt='img'/>facebook</li></a>
          <li><img src={instagram} alt='img'/>instagram</li>
          <li><img src={telegram} alt='img'/>telegram</li>
          <li><img src={whatsapp} alt='img'/>whatsapp</li>
        </ul>
      </div>


  
    </div>
    <div className='footer-below'>
    <h4>@Copyright 2023 unknown Solutions Pvt. Ltd. All Rights Reserved</h4>
    <h5>PRIVACY POLICY | TERMS & CONDITIONS</h5>
    
    </div>
    </div>
  )
}
