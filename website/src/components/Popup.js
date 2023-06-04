import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ triggerText, popupText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTriggerHover = () => {
    setIsHovered(true);
  };

  const handleTriggerLeave = () => {
    setIsHovered(false);
  };

  const handlePopupHover = () => {
    setIsHovered(true);
  };

  const handlePopupLeave = () => {
    setIsHovered(false);
  };

  const popupContentStyle = {
    transform: isHovered ? 'translateY(2px)' : 'none',
  };

  return (
    <span style={{ position: 'relative' }}>
      <span
        onMouseEnter={handleTriggerHover}
        onMouseLeave={handleTriggerLeave}
        onClick={handleTriggerHover}
        className="hover-text"
      >
        {triggerText}
      </span>
      {isHovered && (
        <div
          className="panel"
          onMouseEnter={handlePopupHover}
          onMouseLeave={handlePopupLeave}
        >
          <div className="panel-content" style={popupContentStyle}>
            {popupText}
          </div>
        </div>
      )}
    </span>
  );
};

export default Popup;

