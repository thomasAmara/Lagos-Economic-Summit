import React from 'react'
import './ScreenTwo.css'
import { Link } from 'react-router-dom'
import Print from '../../Assets/leaveimage.png'

const ScreenTwo = () => {
  return (
    <div className="screen-two-container">
        <div className="text-section">
            <p>
            The Lagos Climate Summit 2023 (LCS2023) is a pivotal event that brings together 
            visionaries, experts, and leaders from various domains to address the urgent 
            challenges of climate change. Rooted in the transformative power of Artificial 
            Intelligence (AI), LCS2023 focuses on two key pillars: empowering youth and 
            enhancing SME resilience. The summit serves as a platform for meaningful discussions, 
            knowledge exchange, and the exploration of AI-driven solutions to combat climate 
            change. Join us in this journey to shape a resilient and sustainable future.
            </p>

            <Link to="/AboutUs">
                <button>
                    Read more
                </button>
            </Link>
        </div>
        <div className="image-section">
            <div className="img-container">
            <img className='imagee' src={Print} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ScreenTwo