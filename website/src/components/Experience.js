import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ imageUrl, description }) => {
  const [tabOpen, setTabOpen] = useState(false);
  const [tabVisible, setTabVisible] = useState(false);

  const toggleTab = () => {
    if (!tabOpen) {
      setTabVisible(true);
      setTimeout(() => setTabOpen(true), 0);
    } else {
      setTabOpen(false);
      setTimeout(() => setTabVisible(false), 300);
    }
  };

  return (
    <div className="experience-container">
      <div className="image-container-experience" onClick={toggleTab}>
        <img src={imageUrl} alt="Experience" className="experience-image" />
      </div>

      <div
        className={`description-tab ${tabVisible ? 'visible' : ''} ${tabOpen ? 'open' : ''}`}
      >
        <p className="description-text">{description}</p>
      </div>
    </div>
  );
};

export default Experience;
