import React, { lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Element } from "react-scroll";
import Footer from "./Components/Footer";

// const AboutUs = lazy(() => import("./Pages/AboutUs"));
// const Home = lazy(() => import("./Pages/Home"));
const Sponsors = lazy(() => import("./Pages/Sponsors"));
const Presenter = lazy(() => import("./Pages/Presenter"));
const About = lazy(() => import("./Components/About/About"));
const Summit = lazy(() => import("./Components/SummitNumber/SummitNumber"));
const SpeakerOutput = lazy(() =>
  import("./Components/SpeakerOutput/SpeakerOutput")
);
// const Agenda = lazy(() => import("./Components/Agenda/Agenda"));

function App() {
  return (
    <div className='App'>
      <div style={{ position: "sticky" }}>
        <Navbar />
        <Element name='AboutUs'>
          <div style={{ height: "100%" }}>
            <About />
          </div>
        </Element>

        <Element name='SummitNumber'>
          <div style={{ height: "100%" }}>
            <Summit />
          </div>
        </Element>

        <Element name='Speakers'>
          <div style={{ height: "100%", padding: "20px 0" }}>
            <SpeakerOutput />
          </div>
        </Element>

        {/* <Element name='Agenda'>
          <div style={{ height: "100%", backgroundColor: "#F3D3D2" }}>
            <Agenda />
          </div>
        </Element> */}

        <Element name='Sponsors'>
          <div style={{ height: "100%" }}>
            <Sponsors />
          </div>
        </Element>
        <Element name='Sponsors'>
          <div style={{ height: "100%" }}>
            <Presenter />
          </div>
        </Element>

        <Footer />
      </div>
    </div>
  );
}

export default App;
