import React from 'react'
import './Footer.css'
import Powered from '../Assets/Frame 3901.png'
import {AiOutlineMail, AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'

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
                <p className='p-mid'>The Ball-Room, Lagos Oriental Hotel3 Lekki - Epe Expy,</p>
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
            <div foot-icon>
                <AiOutlineMail />
                <AiFillFacebook style={{marginLeft: '12px'}}/>
                <AiOutlineTwitter style={{marginLeft: '12px'}}/>
                <AiOutlineInstagram style={{marginLeft: '12px'}}/>
                <AiFillLinkedin style={{marginLeft: '12px'}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer