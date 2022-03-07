import React from 'react'
import './FooterStyle.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaSearchLocation, FaTwitter, FaPhone} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}} />
                <div>
                    <p>Milano</p>
                    <h4>Italia</h4>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>+39 0000000420</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/> christian97out@gmail.com</h4> 
            </div>
        </div>
        <div className='right'>
            <h4>About the company</h4>
            <p>"I just want to create a cool looking website about galaxy travel ( yeah, i have been reading a lot about space x lately )"</p>
                <div className='social'>
                    <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                </div>
                </div>
        </div>
    </div>
  )
}

export default Footer