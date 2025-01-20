import React, { useEffect, useRef } from 'react';
import './About.css';
import html from '../../assets/html.png';
import css from '../../assets/css.jpeg';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import mongodb from '../../assets/mongodb.png';
import java from '../../assets/java.png';
import cpp from '../../assets/c++.png';

const About = () => {


  return (
    <>
      <div className="about" id="about">
        <h3>About Me</h3>
        <div className="main-content">
          <p>Hello! I'm <b>Arnab Pramanik</b>, a passionate full stack developer with a strong foundation in programming languages like JavaScript, C, C++, and Java. I specialize in creating efficient, user-focused applications.</p>
          <p>I've honed my skills through various projects, including an e-learning platform, a weather app, a text utilization web app, and currently, a food delivery application called <em>GoFood</em> built on the MERN stack. These experiences have allowed me to work with modern tools and technologies like React, Express, and EJS templates while emphasizing the importance of clean code and robust solutions.</p>
          <p>My goal is to develop applications that solve real-world problems while constantly learning and evolving with the tech industry. I'm always up for a challenge, whether it’s mastering a new framework or optimizing a feature to enhance user experience.</p>
        </div>
      </div>
      
      <div id="line1-container">
        <hr id="line1" />
      </div>

      <div className="skill" >
        <h3>Technical Skills</h3>
        <div className="skill-con">
          <div className="ele1">
            <img src={html} alt="html-logo" />
            <div>
              <p>HTML</p>
              <progress value="90" max="100" className='html'>90%</progress>
            </div>
          </div>
          <div className="ele1">
            <img src={css} alt="css-logo" />
            <div>
              <p>CSS</p>
              <progress value="60" max="100">60%</progress>
            </div>
          </div>
          <div className="ele1">
            <img src={js} alt="js-logo" />
            <div>
              <p>JavaScript</p>
              <progress value="75" max="100">75%</progress>
            </div>
          </div>
          <div className="ele1">
            <img src={react} alt="js-logo" />
            <div>
              <p>React</p>
              <progress value="55" max="100">55%</progress>
            </div>
          </div>
          <div className="ele1">
            <img src={node} alt="node-logo" />
            <div>
              <p>Node.js</p>
              <progress value="75" max="100">75%</progress>
            </div>
          </div>
          <div className="ele1">
            <img src={mongodb} alt="mongodb-logo" />
            <div>
              <p>MongoDB</p>
              <progress value="60" max="100">60%</progress>
            </div>
          </div>
          <div className="ele1">
            <img src={cpp} alt="cpp-logo" />
            <div>
              <p>C++</p>
              <progress value="80" max="100">80%</progress>
            </div>
          </div>
          <div className="ele1">
            <img src={java} alt="java-logo" />
            <div>
              <p>Java</p>
              <progress value="90" max="100">90%</progress>
            </div>
          </div>
        </div>
      </div>
      <div id="line1-container">
        <hr id="line1" />
      </div>
    </>
  );
};

export default About;
