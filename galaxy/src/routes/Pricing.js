import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import PricingCards from '../components/PricingCards'

const Pricing = () => {
  return (
    <div className='pricing'>
        <Navbar />
        <HeroImage heading='Pricing.' text='Choose your trip.' />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing