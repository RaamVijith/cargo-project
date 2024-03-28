import React from 'react'
import '../../styles/footer/Footer.css'
import FooterTop from './FooterTop'
import FooterMidle from './FooterMidle'
import FooterButtom from './FooterButtom'

const Footer = () => {
  return (
    <section className='footer'>
        <FooterTop/>
        <FooterMidle/>
        <FooterButtom/>
    </section>
  )
}

export default Footer