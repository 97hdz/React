import React from 'react'
import './TrainingCardStyle.css'
import {Link} from 'react-router-dom'
import Pod from '../asset/pod.jpg'
import Moon from '../asset/moon.jpg'

const Training = () => {
    return (
        <div className='training-cards'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training