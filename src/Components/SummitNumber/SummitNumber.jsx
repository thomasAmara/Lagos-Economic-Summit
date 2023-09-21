import React from 'react'
import './SummitNumber.css'
import BoxOne from '../../Assets/box-1.png'
import BoxTwo from '../../Assets/box-2.png'
import BoxThree from '../../Assets/box-3.png'

const SummitNumber = () => {
  return (
    <div className='summit-number'>
        <h4 className='eko' style={{color: 'black'}}>The Summit in Numbers</h4>
        <div className="box">
            <div className="one">
                <img src={BoxOne} alt="" />
            </div>
            <div className="two">
                <img src={BoxTwo} alt="" />
            </div>
            <div className="three">
                <img src={BoxThree} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SummitNumber