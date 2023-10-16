import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function Section({ id, title }) {
  return (
    <section id={id}>
      <div
        style={{
          width: "100%",
          height: "50vh",
          backgroundColor:
            id === "Aboutus"
              ? "#F3F2F0"
              : id === "Speakers"
              ? "#3D2E33"
              : id === "Sponsors"
              ? "#4e3e2e"
              : "#e400",
        }}
      >
        {title}
        <Element name='Aboutus' className='element'>
          test 1
        </Element>
        <Element name='Speaker' className='element'>
          test 2
        </Element>
      </div>
    </section>
  );
}

export default Section;
