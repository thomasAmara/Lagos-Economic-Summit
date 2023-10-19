import React from "react";
import "../Pages/Home.css";
// import Print from "../Assets/leave.png";
// import TextTruncate from "../Components/Truncate";
import SpeakerOutput from "../Components/SpeakerOutput/SpeakerOutput";
import SummitNumber from "../Components/SummitNumber/SummitNumber";
import Hero from "../Components/Hero/Hero";
import Blog from "./Blog/Blog";
import FAQ from "./FAQ/FAQ";
import ScreenTwo from "../Components/ScreenTwo/ScreenTwo";
import Navbar from "../Components/Navbar/Navbar";

function Home() {
  
  return (
    <div>
      <Navbar />
      <div className='universal-container'>
        <Hero />

        <div className='screen-two'>
          <p className='eko'>EKO City Summit 2023</p>

          <ScreenTwo />
        </div>

        <div className='summit-section'>
          <SummitNumber />
        </div>

        {/* SPEAKERS SECTION */}
        <div style={{ padding: "25px 0" }}>
          <SpeakerOutput />
        </div>

        <div style={{ padding: "30px 0" }}>
          <Blog />
        </div>

        <div style={{ padding: "30px 0" }}>
          <div style={{ position: "relative" }}>
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
