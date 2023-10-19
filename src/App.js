import React, { lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Element } from "react-scroll";
import Footer from "./Components/Footer";

// const AboutUs = lazy(() => import("./Pages/AboutUs"));
// const Home = lazy(() => import("./Pages/Home"));
const Sponsors = lazy(() => import("./Pages/Sponsors"));
// const Speakers = lazy(() => import("./Pages/Speaker"));
const About = lazy(() => import("./Components/About/About"));
const Summit = lazy(() => import("./Components/SummitNumber/SummitNumber"));
const SpeakerOutput = lazy(() => import("./Components/SpeakerOutput/SpeakerOutput"));
// const Agenda = lazy(() => import("./Components/Agenda/Agenda"));


function App() {
  return (
    <div className='App'>
      <div style={{ position: "sticky" }}>
        <Navbar />
        <Element name='AboutUs'>
          <div style={{ height: "100%"}}>
            <About />
          </div>
        </Element>

       <Element name='SummitNumber'>
         <div style={{ height: "100%"}}>
            <Summit />
          </div>
        </Element>

        <Element name='Speakers'>
          <div style={{ height: "100%", padding: '20px 0' }}>
            <SpeakerOutput />
          </div>
        </Element>

        {/* <Element name='Agenda'>
          <div style={{ height: "100%", padding: '30px 0'}}>
            <Agenda />
          </div>
        </Element> */}

        <Element name='Sponsors'>
          <div style={{ height: "100%", backgroundColor: "#EEE32D" }}>
            <h1>Sponsors Section</h1>
            <Sponsors />
          </div>
        </Element>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
