import React from 'react'
import './Footer.css'
import Powered from '../Assets/Frame 3901.png'
import {AiFillMail,
        AiOutlineTwitter,
        AiOutlineInstagram,
        AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
return (
    <div className='footer'>
        <div className='detail'>
            <div className="detail-left deets">
                <h4 style={{ color: '#0F3879' }}>Office Address</h4>
                <p className='p-mid'>Sunny Motors, Plot 3, Otunba Adedoyin Ogunge close,</p>
                <p>Lekki phase 1, Lagos. Nigeria.</p>
            </div>
            <div className="detail-right deets">
                <h4 style={{ color: '#0F3879' }}>Event Address</h4>
                <p className='p-mid'>The Ball-Room, Lagos Oriental Hotel Lekki - Epe Expy,</p>
                <p>Victoria Island 106104, Lagos</p>
            </div>
        </div>

        <div className='info'>
            <div className='info-img'>
                <img src={Powered} alt="Adanian" />
            </div>

            <div className='info-tel' style={{textAlign: 'left'}}>
                <p style={{ textAlign: 'left', color: '#0F3879' }}>+234 706 728 1296</p>
            </div>
        </div>

        <hr />
        <div className="foot">
            <div className='foot-note'>
                <p style={{fontSize: '12px'}}>© 2023 The Lagos ESG Summit. All rights reserved.</p>
            </div>
            <div className='foot-icon'>
                <AiFillMail />
                {/* <AiFillFacebook /> */}
                <FaFacebookF />
                <AiOutlineTwitter />
                <AiOutlineInstagram />
                <AiFillLinkedin />
            </div>
        </div>
    </div>
  )
}

export default Footer