import React , {useEffect} from 'react';
import '../Pages/Home.css'
import Print from '../Assets/leave.png'
import TextTruncate from '../Components/Truncate';
import Footer from '../Components/Footer';
import SpeakerOutput from '../Components/SpeakerOutput/SpeakerOutput';
// import SummitOutput from '../Components/SummitNumber/SummitNumber'
import SummitNumber from '../Components/SummitNumber/SummitNumber';
import Hero from '../Components/Hero/Hero'

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

  return (
    <div className="universal-container">
      <Hero />
   

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

      <div className="summit-section">
        <SummitNumber />
      </div>

      {/* SPEAKERS SECTION */}
      <div style={{padding: '25px 0'}}>
        <SpeakerOutput />
      </div>
      <Footer />
    </div>
  )
}
// >>>>>>>>> Temporary merge branch 2

export default Home;