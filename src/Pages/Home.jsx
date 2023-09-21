import React from 'react';
import '../Pages/Home.css'
import Print from '../Assets/print.png'
import Killian from '../Assets/Killian.svg'
import TextTruncate from '../Components/Truncate';
import Speakers from '../Components/Speakers'
import Footer from '../Components/Footer';

function Home() {

  const longText = `The Lagos Climate Summit 2023, themed "Innovating for a Resilient Future: Youth Empowerment and SME Resilience in Climate Action."

  The Lagos Climate Summit 2023 - LCS2023 is not merely a conference; it stands as the convergence of visionary minds, impassioned leaders, and pioneers of transformative change. Rooted in the commitment to combat climate change through the catalytic potency of Artificial Intelligence (AI), our focus zeroes in on two crucial pillars: 
  • EMPOWERING YOUTH 
  • ENHANCING SME RESILIENCE
  
  The world today seeks solutions that embody inclusivity, innovation, and sustainability. This summit emerges as a distinctive platform that fosters collective action and channels real-world impact. 
  The urgency of climate change compels us to act purposefully and expediently. With each passing day, the repercussions of environmental degradation become more profound, underscoring the necessity for comprehensive, innovative strategies. 
  By centering on the vibrant engagement of youth and the potential of SMEs to instigate transformative change bolstered by AI innovations, we acknowledge that the solutions to these challenges lie within our grasp. 
  This summit heralds the commencement of an exhilarating journey—a journey that brings together luminous intellects, industry vanguards, scholars, entrepreneurs, and policymakers beneath one roof. 
  Together, we will unravel the intricate interplay between AI, climate action, youth leadership, and the role of SMEs in shaping a metamorphic trajectory for our world.

  The Lagos Climate Summit 2023 serves as a clarion call to action, an embodiment of our shared dedication to forging a sustainable, just, and flourishing future for all. 
  We invite you to join us on this extraordinary voyage of exploration, collaboration, and innovation. 
  Together, let's harness the potential of AI to kindle profound change, empower the previously marginalized, and steer our planet toward a brighter, more sustainable tomorrow. 
  Welcome to the Lagos Climate Summit 2023, where ideas ascend, solutions are conceived, and a better future dawns.`;


  // const longText =
// "The Lagos Climate Summit 2023, themed "Innovating for a Resilient Future: Youth Empowerment and SME Resilience in Climate Action. The Lagos Climate Summit 2023 - LCS2023 is not merely a conference; it stands as the convergence of visionary minds, impassioned leaders, and pioneers of transformative change. Rooted in the commitment to combat climate change through the catalytic potency of Artificial Intelligence (AI), our focus zeroes in on two crucial pillars: • EMPOWERING YOUTH • ENHANCING SME RESILIENCE The world today seeks solutions that embody inclusivity, innovation, and sustainability. This summit emerges as a distinctive platform that fosters collective action and channels real-world impact. The urgency of climate change compels us to act purposefully and expediently. With each passing day, the repercussions of environmental degradation become more profound, underscoring the necessity for comprehensive, innovative strategies. By centering on the vibrant engagement of youth and the potential of SMEs to instigate transformative change bolstered by AI innovations, we acknowledge that the solutions to these challenges lie within our grasp. This summit heralds the commencement of an exhilarating journey—a journey that brings together luminous intellects, industry vanguards, scholars, entrepreneurs, and policymakers beneath one roof. Together, we will unravel the intricate interplay between AI, climate action, youth leadership, and the role of SMEs in shaping a metamorphic trajectory for our world. The Lagos Climate Summit 2023 serves as a clarion call to action, an embodiment of our shared dedication to forging a sustainable, just, and flourishing future for all. We invite you to join us on this extraordinary voyage of exploration, collaboration, and innovation. Together, let's harness the potential of AI to kindle profound change, empower the previously marginalized, and steer our planet toward a brighter, more sustainable tomorrow. Welcome to the Lagos Climate Summit 2023, where ideas ascend, solutions are conceived, and a better future dawns."
  return (
    <div className="universal-container">
    <div className='HomeContainer'>
    <div className='summit-info'>
      <div className="top">
          <h2>LCS <span>2023</span></h2>
          <p>LAGOS CLIMATE SUMMIT</p>
        </div>

        <div className="bottom">
          <div className="date">
            <h4>Date:</h4>
            <p>Date: Monday 13th of November 2023.</p>
          </div>

          <div className="venue">
              <h4>Venue:</h4>
              <p>Eko Hotel and Suites, Victoria Island, Lagos.</p>
          </div>
        </div>
    </div>
     {/* Home Page */}
      {/* <div className='summitContainer'> */}
        {/* <text style={{ color: '#222222', fontWeight: '700', fontSize: '24px' }}> */}
          {/* EKO City Summit 2023 */}
        {/* </text> */}
        {/* <div> */}
          {/* <div>text</div> */}
          {/* <div>Image</div> */}
        {/* </div> */}
      {/* </div> */}


      
      
    </div>
    <div className='screen-two'>
      <p className='eko'>EKO City Summit 2023</p>

    <div className="screenTwo-content">

        <div className="sc2-text">
        <TextTruncate text={longText} maxLength={525} />
        </div>

        <div className="sc2-image">
          <div className="footprint">
          <img src={Print} className='print' alt="carbon print" 
          style={{margin: 'auto'}}/>
          </div>
        </div>
        </div>
      </div>



      {/* SPEAKERS SECTION */}
      <div>
      <div className="speaker-wrap">
        <p className="topic">SPEAKERS</p>
      <div className='speaker-container'> 
      <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        /> 
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
         <Speakers
          src={Killian}
          alt="Image 1 Alt Text"
          caption="Killian Mayua"
        />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}
// >>>>>>>>> Temporary merge branch 2

export default Home;
