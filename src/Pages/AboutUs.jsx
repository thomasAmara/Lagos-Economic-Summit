import React, { useState } from "react";
import FootPrint from "../Assets/leave.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rating from "@mui/material/Rating";
import Killian from "../Assets/Killian.svg";
import Speakers from "../Components/Speakers";
import "./AboutUs.css";
import lsc from "../Assets/LSC.png";
import map from "../Assets/Map.png";

function AboutUs() {
  const [slideIndex, setSlideIndex] = useState(0);

  const cards = [
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 3,
    },
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 4,
    },
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 5,
    },
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 4,
    },
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 3,
    },
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 5,
    },
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 4,
    },
    {
      text: "“Congratulations on a super event yesterday.”",
      name: "Tom Williams",
      job: "SoftWare Developer",
      rank: 4,
    },
    // Add more cards as needed
  ];

  // useEffect(() => {

  // }, [window.innerWidth])

  const numCardsToShow = window.innerWidth <= 720 ? 1 : 3; // Adjust the number of cards to show based on screen width

  const handlePrev = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNext = () => {
    setSlideIndex(slideIndex + 1);
  };

  const renderCards = () => {
    const startIndex = slideIndex * numCardsToShow;
    const endIndex = startIndex + numCardsToShow;
    return cards.slice(startIndex, endIndex).map((content, index) => (
      <div className='card' key={index}>
        <p>{content.text}</p>
        <Rating
          name='simple-controlled'
          value={content.rank}
          style={{ marginTop: "12px" }}
        />
        <p>{content.name}</p>
        <p>{content.job}</p>
      </div>
    ));
  };

  return (
    <div className='aboutUs-container'>
      <div className='about-text-container'>
        <div className='aboutUs-text-container-text'>
          <div>
            <p>
              <strong>The Lagos Climate Summit 2023</strong>, themed "
              <strong>
                Innovating for a Resilient Future: Youth Empowerment and SME
                Resilience in Climate Action.
              </strong>
              "
            </p>
          </div>

          <div>
            <p>
              The Lagos Climate Summit 2023 - <strong>LCS2023 </strong>is not
              merely a conference; it stands as the convergence of visionary
              minds, impassioned <strong>leaders</strong> , and{" "}
              <strong>pioneers</strong> of transformative change. Rooted in the
              commitment to combat climate change through the catalytic potency
              of Artificial Intelligence (AI), our focus zeroes in on two
              crucial <strong>pillars</strong>:
            </p>
            <ul>
              <li>
                <strong>EMPOWERING YOUTH</strong>
              </li>
              <li>
                <strong>ENHANCING SME RESILIENCE</strong>
              </li>
            </ul>
          </div>

          <div>
            <p>
              The world today seeks solutions that embody{" "}
              <strong>inclusivity</strong>, <strong>innovation</strong>, and{" "}
              <strong>sustainability</strong>. This summit emerges as a
              distinctive platform that fosters collective{" "}
              <strong>action</strong> and channels real-world{" "}
              <strong>impact</strong>. The urgency of climate change compels us
              to act purposefully and expediently. With each passing day, the
              repercussions of environmental degradation become more profound,
              underscoring the necessity for comprehensive, innovative
              strategies. By centering on the vibrant engagement of youth and
              the potential of SMEs to instigate transformative change bolstered
              by AI innovations, we acknowledge that the solutions to these
              challenges lie within our grasp. This summit heralds the
              commencement of an exhilarating journey—a journey that brings
              together luminous intellects, industry vanguards, scholars,
              entrepreneurs, and policymakers beneath one roof. Together, we
              will unravel the intricate interplay between <strong>AI</strong>,{" "}
              <strong>climate action</strong>,<strong>youth leadership</strong>,
              and the <strong>role of SMEs</strong> in shaping a metamorphic
              trajectory for our world.
            </p>
          </div>

          <div>
            <p>
              The Lagos Climate Summit 2023 serves as a clarion call to action,
              an embodiment of our shared dedication to forging a sustainable,
              just, and flourishing future for all. We invite you to join us on
              this extraordinary voyage of <strong>exploration</strong>,{" "}
              <strong>collaboration</strong>, and <strong>innovation</strong>.
              Together, let's harness the potential of <strong>AI</strong> to
              kindle profound change, empower the previously marginalized, and
              steer our planet toward a brighter, more{" "}
              <strong>sustainable</strong> tomorrow. Welcome to the{" "}
              <strong>Lagos Climate Summit 2023</strong>, where ideas ascend,
              solutions are conceived, and a better future dawns.
            </p>
          </div>
        </div>

        <div className='aboutUs-text-container-image'>
          <img src={FootPrint} alt='FootPrint' />
        </div>
      </div>

      <div className='carousel-container'>
        <div className='carousel-container-text'>
          <p>What the Community have to Say</p>
        </div>
        <div className='carousel-container-content'>
          <button
            className='nav-button'
            onClick={handlePrev}
            disabled={slideIndex === 0}
          >
            &lt;
          </button>
          <div className='carousel'>{renderCards()}</div>
          <button
            className='nav-button'
            onClick={handleNext}
            disabled={
              slideIndex === Math.ceil(cards.length / numCardsToShow) - 1
            }
          >
            &gt;
          </button>
        </div>
      </div>

      <div className='agenda-container'>
        <div className='agenda-container-content'></div>
      </div>

      {/* Speaker */}

      <div className='speaker-container'>
        <div className='speaker-wrap'>
          <p style={{ textAlign: "center" }} className='eko'>
            SPEAKERS
          </p>
          <div className='speaker-container'>
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
            />
            <Speakers
              src={Killian}
              alt='Image 1 Alt Text'
              caption='Killian Mayua'
              captions='Adanian Labs'
            />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className='map-container'>
        <div className='map-container-text'>
          <p>MAP</p>
        </div>
        <div className='map-container-content'>
          <div className='map-container-right-content'>
            <div>
              <img src={lsc} alt='Lagos' />
            </div>

            <div className='map-container-right-form-container'>
              <div>
                <span>Name</span>

                <input placeholder='Enter Name' />
              </div>

              <div>
                <span>Subscribe Here</span>

                <input placeholder='Enter Email' />
              </div>

              <div>
                <span>Contact Me</span>

                <input placeholder='Enter Contact' />
              </div>

              <div>
                <span>Location</span>

                <input placeholder='Enter Country' />
              </div>
            </div>

            <div className='map-button'>
              <button>Attend Submit</button>
            </div>
          </div>

          <div className='map-container-left-content'>
            <div>
              <img src={map} alt='Lagos' />
            </div>

            <div className='google-button'>
              <button>Open In Google Map</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
