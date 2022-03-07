import Navbar from '../components/Navbar'
import React, { Component } from 'react'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import TrainingCard from '../components/TrainingCard'

export class Training extends Component {
  render() {
    return (
      <div className='training'>
          <Navbar />
          <HeroImage heading='TRAINING.' text='Pre-Flight and In-Flight Training' />
          <TrainingCard />
          <Footer />
      </div>
    )
  }
}

export default Training