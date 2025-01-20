

import React from 'react';
import './Header.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Header = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <>
      <div className="header" id="header">
        <div className="left" data-aos="fade-right">
          <p className="intro">Hi, I am Arnab</p>
          <p className="tagline">Full Stack Developer | MERN Stack Enthusiast | Problem Solver</p>
          <a
            href="/path-to-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-left">
          <img src="demo.png" alt="Arnab" className="profile-img" />
        </div>
      </div>
      <div id="line1-container" data-aos="zoom-in">
        <hr id="line1" />
      </div>
    </>
  );
};

export default Header;

