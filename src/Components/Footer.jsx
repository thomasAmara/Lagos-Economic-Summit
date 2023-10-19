/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Footer.css'
import Adanian from '../Assets/Adalogo.png'
import {AiFillMail,
        //AiOutlineTwitter,
        AiOutlineInstagram,
        AiFillLinkedin} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
// import {HiOutlineMail} from 'react-icon/hi'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'


const Footer = () => {
return (
    <div className="footer-container">
    <div className='footer'>
        <div className='detail'>
            <div className="detail-left deets" style={{display: 'flex', flexDirection: 'column'}}>
                <h4 style={{ color: '#0F3879' }}>Office Address</h4>
                <p className='p-mid'>Sunny Motors, Plot 3, Otunba Adedoyin Ogunge close,</p>
                <p>Lekki phase 1, Lagos. Nigeria.</p>




               
                <div className='info-img' style={{justifyContent: 'flex-start'}}>
                    <div className="adanianlogo" style={{display: 'flex', gap: '10px'}}>
                        <p>Powered by</p>
                    <img src={Adanian} alt="Adanian" />
                    </div>
                




            </div>
            </div>
            <div className="detail-right deets" style={{display: 'flex', flexDirection: 'column'}}>
                <h4 style={{ color: '#0F3879' }}>Event Address</h4>
                <p className='p-mid'>The Ball-Room, Lagos Oriental Hotel Lekki - Epe Expy,</p>
                <p>Victoria Island 106104, Lagos</p>

                <div className='info-tel' style={{justifyContent: 'flex-start'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <BsFillTelephoneOutboundFill  style={{color: '#0F3879'}}/>
                    <p style={{ textAlign: 'left', color: '#0F3879' }}>+234 706 728 1296</p>
                </div>
               
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px'}}>
                    <IoMdMail size={20} style={{color: '#0F3879'}}/>
                    <p style={{ textAlign: 'left', color: '#0F3879' }}>hello@lagosclimatesummit.org</p>
                </div>
            </div>
            </div>
        </div>

        {/* <div className='info'>
            <div className='info-img' style={{justifyContent: 'flex-start'}}>
                <img src={Powered} alt="Adanian" />
            </div>

            <div className='info-tel' style={{justifyContent: 'flex-start'}}>
                <p style={{ textAlign: 'left', color: '#0F3879' }}>+234 706 728 1296</p>
            </div>
        </div> */}

        <hr />
        <div className="foot">
            <div className='foot-note'>
                <p style={{fontSize: '12px'}}>© 2023 The Lagos ESG Summit. All rights reserved.</p>
            </div>
            <div className='foot-icon'>

            <a href="/" class="iconlink" target="_blank" rel='noreferrer'>
            <AiFillMail size={20}/>
            </a>
            <a href="/" class="iconlink" target="_blank" rel='noreferrer'>
            <BiLogoFacebook size={20}/>
            </a>
            <a href="https://twitter.com/OfficialApata" class="iconlink" target="_blank" rel='noreferrer'>
            <RiTwitterXLine size={20}/>
            </a>
            <a href="/" class="iconlink" target="_blank" rel='noreferrer'>
            <AiOutlineInstagram size={20}/>
            </a>
            <a href="/" class="iconlink" target="_blank">
            <AiFillLinkedin size={20}/>
            </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer