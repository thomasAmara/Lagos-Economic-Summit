import React, { useState } from "react";
import "./Speaker.css";

const ImageWithCaption = ({ src, alt, caption }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    
      <img src={src} alt={alt} className="image" />
      <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
        {caption}
      </div>
    </div>
  );
};

export default ImageWithCaption;
