import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Blog from "./Pages/Blog/Blog";
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Home = lazy(() => import("./Pages/Home"));
const FAQ = lazy(() => import("./Pages/FAQ/FAQ"));
const BookNow = lazy(() => import("./Pages/Book"));
const Sponsors = lazy(() => import("./Pages/Sponsors"));
const Speakers = lazy(() => import("./Pages/Speaker"));


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Aboutus' element={<AboutUs />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/BookNow' element={<BookNow />} />
          <Route path='/Sponsors' element={<Sponsors />} />
          <Route path='/Speakers' element={<Speakers />} />
          <Route path='/Blog' element={<Blog />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
