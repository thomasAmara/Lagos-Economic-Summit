// import React, { useState } from 'react';
// import './Agenda.css'; // You can define your own CSS styles

// function AccordionItem({title, content, imageUrl }) {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleAccordion = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className={`accordion-item ${isCollapsed ? '' : 'active'}`}>
//       <button className="accordion-button" onClick={toggleAccordion}>
//         <div>
//          {time}
//         </div>
//         {title}
//         <span className={`accordion-icon ${isCollapsed ? '' : 'active'}`}>+</span>
//       </button>
//       {!isCollapsed && (
//         <div className="accordion-content">
//           <img src={imageUrl} alt="Accordion" className="accordion-image" />
//           <p className="accordion-text">{content}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// function Accordion() {
//   const items = [
//     {
//       title: 'Section 1',
//       content: 'Content for section 1 goes here.',
//       imageUrl: 'image1.jpg',
//     },
//     {
//       title: 'Section 2',
//       content: 'Content for section 2 goes here.',
//       imageUrl: 'image2.jpg',
//     },
//     {
//       title: 'Section 3',
//       content: 'Content for section 3 goes here.',
//       imageUrl: 'image3.jpg',
//     },
//   ];

//   return (
//     <div className="accordion-container">
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           title={item.title}
//           content={item.content}
//           imageUrl={item.imageUrl}
//         />
//       ))}
//     </div>
//   );
// }

// export default Accordion;
