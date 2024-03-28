import React from 'react'
import '../../styles/footer/FooterTop.css'

const FooterTop = () => {
  return (
    <div className='footerTop'>
        <div className='footerTop--left'>
            <h1>Weekly Newsletter</h1>
            <p>There are many various of passangers of lorem available</p>
        </div>
        <div className='footerTop--right'>
            <input placeholder='Enter Your Mail' />
            <button> SUBSCRIBE </button>
        </div>
    </div>
  )
}

export default FooterTop