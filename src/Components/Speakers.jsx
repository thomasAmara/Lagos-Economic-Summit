import React, { useState } from "react";
import "./Speaker.css";


const ImageWithCaption = ({ src, alt, caption, secCaption, linkurl}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    // <div
    //   className={`image-container ${isHovered ? "hovered" : ""}`}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    // >
    
    //   <img src={src} alt={alt} className="image" />
    //   <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
    //     {caption}
    //   </div>
    //   <div className={`secCaption ${isHovered ? "overlay-visible" : ""}`}>
    //     {secCaption}
    //   </div>
    // </div>
    <div
  className={`image-container ${isHovered ? "hovered" : ""}`}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <img src={src} alt={alt} className="image" />
  <div className={`overlay ${isHovered ? "overlay-visible" : ""}`} />
  <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
    <a href={linkurl} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center'}}>
    {caption}
    </a>
  </div>
  <div className={`secCaption ${isHovered ? "overlay-visible" : ""}`}>
    {secCaption}
  </div>
</div>

  );
};

export default ImageWithCaption;
