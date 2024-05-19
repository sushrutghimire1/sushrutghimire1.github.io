import React from 'react';
import profilePic from './profile-pic.jpeg';
import speakingpic from './speaking pictures.png';


import './FeaturedStory.css';

const FeaturedStory = () => {
  return (
    <div className="featured-story">
      <div className="profile">
        <img src={profilePic} alt="Sundar Pichai" className="profile-pic" />
        <h2>Sushrut Ghimire</h2>
        <p>Computer Scientist</p>
        <p>
        Passionate computer scientist with a knack for innovation and problem-solving.
        </p>
      </div>
      <div className="presentation">
        <img src={speakingpic} alt="Presentation" className="presentation-pic" />
      </div>
      
    </div>
  );
};

export default FeaturedStory;
