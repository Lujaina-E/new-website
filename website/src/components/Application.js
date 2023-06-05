import React, { useState } from 'react';
import GithubLogo from '../images/github_logo.png';

const Application = ({ name, description, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNameClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`application-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="application-info">
        <div className="name" onClick={handleNameClick}>
          {name}
        </div>
        {isExpanded && (
          <div className="expanded-info">
            <div className="description">{description}</div>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} alt="GitHub" className="github-logo" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Application;
