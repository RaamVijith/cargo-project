import React from 'react'
import '../../styles/footer/FooterButtom.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const FooterButtom = () => {
  return (
    <div className='footerButtom'>
        <p> Copyright @ 2021 All Rights Reserved. Site By Xiteb</p>
        <div className='footerButtom--div'>
             <CiFacebook />
             <FaInstagram />
             <CiLinkedin />
             <CiYoutube />
        </div>
    </div>
  )
}

export default FooterButtom