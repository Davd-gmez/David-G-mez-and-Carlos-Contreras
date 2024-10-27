import React from 'react';
import './App.js';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video className="video-background" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
