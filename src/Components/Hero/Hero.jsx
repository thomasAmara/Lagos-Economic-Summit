

// SlidingContentBackground.js
import React from 'react';
import './Hero.css';

import image1 from '../../Assets/Background.png'; 
// import image2 from '../../Assets/Background2.png'; 
import image2 from '../../Assets/bg3.png'; 
import image3 from '../../Assets/background3.png'; 
// import image4 from '../../Assets/Background4.png'; 

const images = [image1, image2, image3]; // Store imported images in an array

const SlidingContentBackground = () => {
  return (
    <div className="sliding-content-background">
      <div className="sliding-background">
        {images.map((image, index) => (
          <div
            key={index}
            className={`background-image ${
              index === 0 ? 'visible' : 'hidden'
            }`}
            style={{ backgroundImage: `url(${image})`, 
            animationDuration: '24s', // Total animation duration for 3 images
        }}

          ></div>
        ))}
      </div>
      <div className="sliding-content">

            <div className="summit-info">
            
                <div className="top">
                    <h2>LCS <span>2023</span></h2>
                    <p>LAGOS CLIMATE SUMMIT</p>
                </div>

                <div className="bottom">
                    <div className="date">
                        <h4 style={{fontSize: '16px', fontWeight: '600'}}>Date:</h4>
                        <p style={{color: 'black', fontWeight: '600', textAlign: 'left'}}>Monday 13th of November 2023.</p>
                    </div>

                    <div className="venue">
                        <h4 style={{fontSize: '16px', fontWeight: '600'}}>Venue:</h4>
                        <p style={{color: 'black', fontWeight: '600', textAlign: 'left'}}>Eko Hotel and Suites, Victoria Island, Lagos.</p>
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default SlidingContentBackground;
