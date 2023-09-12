import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Home = lazy(() => import('./Pages/Home'));
const FAQ = lazy(() => import('./Pages/FAQ'));

function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Aboutus' element={<AboutUs />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
