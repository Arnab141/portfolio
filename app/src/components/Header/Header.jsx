import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="left">
        <p className="intro">Hi, I am Arnab</p>
        <p className="tagline">Backend Developer | MERN Stack Enthusiast | Problem Solver</p>
        <a href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
          Download Resume
        </a>
      </div>
      <div className="right">
        <img src="demo.png" alt="Arnab" className="profile-img" />
      </div>
    </div>
  );
};

export default Header;
