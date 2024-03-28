import '../../styles/footer/FooterMiddle.css'
import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

const FooterMidle = () => {
  return (
    <div className='footerMidle'>
    {/* sec 1 */}
        <div className='aboutUs' >
            <h3>About Us</h3>
            <p> lorem ipsum dolor sit amet consecture adipisingin eltid.</p>
            <p><span><IoIosCall /></span> |  (+94) 11 434 7575</p>
            <p><span><FaLocationDot /></span> |  42, Lily Ave, Colombo 00600</p>
        </div>
            {/* sec 2 */}
            <div className='LatestNews' >
            <h3>Latest News</h3>
            <p><span><IoIosArrowForward /></span> Sed ut perspicaiaties lorem ipsum dolor sit amet consecture adipisingin eltid.
            <br/><br/> 5 Minutes Ago</p>
            <p><span><IoIosArrowForward /></span> Perspicaiaties lorem ipsum dolor sit amet consecture adipisingin eltid.
            <br/><br/> 5 Minutes Ago</p>
        </div>
            {/* sec 3 */}
            <div className='Customer-Service' >
            <h3>Customer Service</h3>
            <p><span><IoStarHalf /></span>  Support Forums</p>
            <p><span><IoStarHalf /></span>  Communication</p>
            <p><span><IoStarHalf /></span>  FAQs</p>
            <p><span><IoStarHalf /></span>  Privacy Policies</p>
            <p><span><IoStarHalf /></span>  Rules & Condition</p>
            <p><span><IoStarHalf /></span>  Contact Us</p>
        </div>
            {/* sec 1 */}
            <div className='Customer-Service2' >
            <h3>Customer Service</h3>
            <div className='customer-img'>
                <img alt='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMdd1QT0QTmTliFnVD_mYSsxXR1m0h0O3BCIKybxPOA&s' />
                <img alt='image' src='https://moovlogistics.com/wp-content/uploads/2023/01/022.jpg' />
                <img alt='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31-MVo2J0ixEHh3eoZEN7VASYc_LvvFUGBMP2TtykRSKsETk-T_97qqRSw2gJ1GHY0h8&usqp=CAU' />
                <img alt='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMdd1QT0QTmTliFnVD_mYSsxXR1m0h0O3BCIKybxPOA&s' />
                <img alt='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTWArMRpePbSQXKNv0NvmO7VZNRIGawLK9AxUZtqeUrau7HF62Idef7DWXRBWQJrqVc8&usqp=CAU' />
                <img alt='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMdd1QT0QTmTliFnVD_mYSsxXR1m0h0O3BCIKybxPOA&s' />

            </div>
        </div>
    </div>

    
  )
}

export default FooterMidle