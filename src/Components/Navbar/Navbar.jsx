import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../../src/Images/LCS 2 1 (1).svg";
import { Link } from "react-scroll";
// import AboutUs from "../../Pages/AboutUs";
import Hero from "../Hero/Hero";
import { Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div className='navbar sticky-navbar'>
      <div className='navbar'>
        <div className='navbar-nav'>
          <div style={{ padding: "10px 0px" }}>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <div className='navbar-pages'>
            <div className='navbar-svg'>
              <Link to='AboutUs' smooth={true} duration={500}>
                <Text fontSize='15px' fontWeight='600'>
                  About
                </Text>{" "}
              </Link>
            </div>

            <div className='navbar-svg'>
              <Link to='Speakers' smooth={true} duration={500}>
                <Text fontSize='15px' fontWeight='600'>
                  Speakers
                </Text>
              </Link>
            </div>
            <div className='navbar-svg'>
              <Link to='Sponsors' smooth={true} duration={500}>
                <Text fontSize='15px' fontWeight='600'>
                  Sponsors
                </Text>
              </Link>
            </div>
            <div className='navbar-svg'>
              <Link to='Agenda' smooth={true} duration={500}>
                <Text fontSize='15px' fontWeight='600'>
                  Agenda
                </Text>
              </Link>
            </div>
<<<<<<< HEAD
            <div className='navbar-svg'>
              <Link to='Information' smooth={true} duration={500}>
=======
            {/* <Link to='/Blog'> */}
            <div className='navbar-svg'>
              <Link to='Sponsors' smooth={true} duration={500}>
>>>>>>> f2e4c17772bbab3646ac9e27b305e0ba2a5fe138
                <Text fontSize='15px' fontWeight='600'>
                  Practical Information
                </Text>
              </Link>
            </div>
<<<<<<< HEAD
=======
            {/* </Link> */}
>>>>>>> f2e4c17772bbab3646ac9e27b305e0ba2a5fe138
            {/* <Link>Gallery</Link> */}
          </div>
          <div className='book-now'>
            <button>
              <Link
                to='./BookNow'
                style={{
                  color: "#FFF",
                  fontSize: "18px",
                }}
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}
