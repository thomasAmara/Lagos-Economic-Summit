import './Speaker.css'
// export default function ({
function NewSpeaker({
  src,
  alt,
  caption,
  description,
  linkurl
}) {
  return (
    <div className="image-container">
      <div className="image-box">
        <img src={src} alt={alt} className="image" />
      </div>
      <div className="caption">
        <a href={linkurl} target="_blank" rel="noreferrer">
          <p>
            {caption}
          </p>
        </a>
      </div>
      <div className="secCaption">
        <p>{description}</p>
        </div>
    </div>
  );
}
export default NewSpeaker




// import React from 'react';

// export default ImageWithCaption ({ src, alt, caption, description, linkurl });  {
//   return (
//     <div className="image-container">
//       <img src={src} alt={alt} className="image" />
//       <div className="caption">
//         <a href={linkurl} target="_blank" rel="noreferrer">
//           <strong style={{ color: 'blue' }}>{caption}</strong>
//         </a>
//       </div>
//       <div className="secCaption">{description}</div>
//     </div>
//   );
// };

// import React from 'react';


// import React, { useState } from "react";
// import "./Speaker.css";
// export default ImageWithCaption  ({ src, alt, caption, secCaption, linkurl}); { 
//   return (
//     <div
//   className={`image-container ${isHovered ? "hovered" : ""}`}
//   onMouseEnter={handleMouseEnter}
//   onMouseLeave={handleMouseLeave}
// >
//   <img src={src} alt={alt} className="image" />
//   <div className={`overlay ${isHovered ? "overlay-visible" : ""}`} />
//   <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
//     <a href={linkurl} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center'}}>
//     {caption}
//     </a>
//   </div>
//   <div className={`secCaption ${isHovered ? "overlay-visible" : ""}`}>
//     {secCaption}
//   </div>
// </div>
// )
// }
// // export default ImageWithCaption;