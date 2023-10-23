import React, { useState } from 'react';
import './Agenda.css';
// import Killian from '../../Assets/Killian.svg'


function AccordionItem({ time, title, content, imageUrl }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  

  return (
    <div className={`accordion-item ${isCollapsed ? '' : 'active'}`}>
      <button className="accordion-button" onClick={toggleAccordion}>
        <div className='info'>
        <div className="accordion-time">{time}</div>
        <div className="accordion-title">{title}</div>
        </div>
        <span className={`accordion-icon ${isCollapsed ? '' : 'active'}`}>+</span>
      </button>
      {!isCollapsed && (
        <div className="accordion-content">
          <img src={imageUrl} alt="Accordion" className="accordion-image" />
          <p className="accordion-text">{content}</p>
        </div>
      )}
    </div>
  );
}

function Accordion() {
  const items = [
    {
      time: '10:00AM - 10:30 AM',
      title: 'Opening speech',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate! Neque nam et quod non!',
      imageUrl: 'image1.jpg',
    },
    {
      time: '11:30 AM',
      title: 'Keynote address',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate! Neque nam et quod non!',
      imageUrl: 'image1.jpg',
    },
    {
      time: '1:00 PM',
      title: 'Closing speech',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate! Neque nam et quod non!',
      imageUrl: 'image1.jpg',
    },
  ];

  return (
    <>
    <div className='contain'>
        <p className="topics">
            Agenda
        </p>
    </div>
    <div className="summit-theme">
        <div className="theme">
            <h4>
                Lagos Climate Summit
            </h4>
            <p>
                21st November 2023
            </p>
        </div>

    </div>
    <div className="accordion-container">
      {items.map((item, index) => (           
        <AccordionItem
          key={index}
          time={item.time}
          title={item.title}
          content={item.content}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
    </>
  );
}

export default Accordion;



// // import React, { useState } from 'react';
// // import './Agenda.css'; // You can define your own CSS styles

// // function AccordionItem({title, content, imageUrl }) {
// //   const [isCollapsed, setIsCollapsed] = useState(true);

// //   const toggleAccordion = () => {
// //     setIsCollapsed(!isCollapsed);
// //   };

// //   return (
// //     <div className={`accordion-item ${isCollapsed ? '' : 'active'}`}>
// //       <button className="accordion-button" onClick={toggleAccordion}>
// //         <div>
// //          {time}
// //         </div>
// //         {title}
// //         <span className={`accordion-icon ${isCollapsed ? '' : 'active'}`}>+</span>
// //       </button>
// //       {!isCollapsed && (
// //         <div className="accordion-content">
// //           <img src={imageUrl} alt="Accordion" className="accordion-image" />
// //           <p className="accordion-text">{content}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // function Accordion() {
// //   const items = [
// //     {
// //       title: 'Section 1',
// //       content: 'Content for section 1 goes here.',
// //       imageUrl: 'image1.jpg',
// //     },
// //     {
// //       title: 'Section 2',
// //       content: 'Content for section 2 goes here.',
// //       imageUrl: 'image2.jpg',
// //     },
// //     {
// //       title: 'Section 3',
// //       content: 'Content for section 3 goes here.',
// //       imageUrl: 'image3.jpg',
// //     },
// //   ];

// //   return (
// //     <div className="accordion-container">
// //       {items.map((item, index) => (
// //         <AccordionItem
// //           key={index}
// //           title={item.title}
// //           content={item.content}
// //           imageUrl={item.imageUrl}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // export default Accordion;
