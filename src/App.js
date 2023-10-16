import React from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
// import Blog from "./Pages/Blog/Blog";
import Section from "./Components/Section";
// const AboutUs = lazy(() => import("./Pages/AboutUs"));
// const Home = lazy(() => import("./Pages/Home"));
// const FAQ = lazy(() => import("./Pages/FAQ/FAQ"));
// const BookNow = lazy(() => import("./Pages/Book"));
// const Sponsors = lazy(() => import("./Pages/Sponsors"));
// const Speakers = lazy(() => import("./Pages/Speaker"));

function App() {
  return (
    <div className='App'>
      <div style={{ position: "sticky" }}>
        <Navbar />
        <Section id='Aboutus' title='AboutUs' />
        <Section id='Speakers' title='Speaker' />
        <Section id='Sponsors' title='Sponsors' />
        <Section id='Agenda' title='Agenda' />
        <Footer />
      </div>
    </div>
  );
}

export default App;
