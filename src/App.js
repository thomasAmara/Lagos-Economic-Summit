import React, { lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Element } from "react-scroll";
import Footer from "./Components/Footer";

// const AboutUs = lazy(() => import("./Pages/AboutUs"));
// const Home = lazy(() => import("./Pages/Home"));
const Sponsors = lazy(() => import("./Pages/Sponsors"));
const Speakers = lazy(() => import("./Pages/Speaker"));

function App() {
  return (
    <div className='App'>
      <div style={{ position: "sticky" }}>
        <Navbar />
        <Element name='AboutUs'>
          <div style={{ height: "100vh", backgroundColor: "#43E32D" }}>
            <h1>About Us Section</h1>
          </div>
        </Element>
        <Element name='Speakers'>
          <div style={{ height: "100vh" }}>
            <h1>Speakers Section</h1>
            <Speakers />
          </div>
        </Element>
        <Element name='Agenda'>
          <div style={{ height: "100vh", backgroundColor: "#F3D3D2" }}>
            <h1>Agenda Section</h1>
          </div>
        </Element>
        <Element name='Sponsors'>
          <div style={{ height: "100vh", backgroundColor: "#EEE32D" }}>
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
