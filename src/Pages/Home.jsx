import React from 'react';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className='HomeContainer'>
      Home Page
      <div className='summitContainer'>
        <text style={{ color: '#222222', fontWeight: '700', fontSize: '24px' }}>
          EKO City Summit 2023
        </text>
        <div>
          <div>text</div>
          <div>Image</div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  );
}

export default Home;
