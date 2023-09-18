import React from 'react'
import "../Navbar/Navbar.css"
import logo from "../../../src/Images/LCS 2 1 (1).svg"
import { Link } from 'react-router-dom'
import AboutUs from '../../Pages/AboutUs'
import {BiSolidDownArrow} from "react-icons/bi"
import {BiRightArrowAlt} from "react-icons/bi"
import FAQ from '../../Pages/FAQ'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-nav">
      <img src={logo} alt="" />
      <div className='navbar-pages'>
        <Link to="/AboutUs">About Us</Link>
        <Link>Agenda</Link>
        <div className="navbar-svg">
          <Link>Speakers</Link>
          <BiSolidDownArrow size={10}/>
        </div>
        <div className="navbar-svg">
          <Link>Sponsors</Link>
          <BiSolidDownArrow size={10}/>
        </div>
        <div className="navbar-svg">
          <Link to="/FAQ">Summit FAQ</Link>
          <BiSolidDownArrow size={10}/>
        </div>
        <Link>Blogs</Link>
        <Link>Gallery</Link>
      </div>
      <div className="book-now">
        <button>Book Now <BiRightArrowAlt color='white'/></button>
      </div>
      </div>
      <div className="nav-btn">
        <button>Book Today</button>
        <button>Sponsor Enquiry</button>
      </div>
    </div>
  )
}
