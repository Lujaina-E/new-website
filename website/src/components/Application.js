import React, { useState } from 'react';
import "./Application.css"

const Application = ({ imageSrc, AppTitle, description, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="square-component"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt="Application" />

      {isHovered && (
        <div className="translucent-window" onClick={handleMouseLeave}>
          <div className="content">
            <h2>{AppTitle}</h2>
            <p>{description}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
