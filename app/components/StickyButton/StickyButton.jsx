"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './StickyButton.css';

const StickyButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:geral@grasroc.pt";
  };

  return (
    <button onClick={handleClick} className="sticky-button">
      <div className="white-circle">
        <FontAwesomeIcon
          icon={faEnvelope}
          size="lg"
          color="var(--gras-titles-blue)"
        />
      </div>
    </button>
  );
};

export default StickyButton;