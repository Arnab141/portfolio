import React, { useEffect } from 'react';
import './Project.css';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';

const Project = () => {
  useEffect(() => {
    const projectElements = document.querySelectorAll('.ele');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add the show class when visible
          } else {
            entry.target.classList.remove('show'); // Remove the show class when not visible
          }
        });
      },
      { threshold: 0.3 }
    );

    projectElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="project" id="project">
        <h3>Projects</h3>
        <div className="main">
          <div className="ele">
            <p id="p">Weatherio</p>
            <img src={p2} alt="Project Thumbnail" />
            <p>It is a weather application based on HTML, CSS, and JavaScript.</p>
            <div className="btn">
              <a href="https://arnab141.github.io/Weather/" target="_blank" id="btn1">
                Demo
              </a>
              <a href="" target="_blank" id="btn2">
                Code
              </a>
            </div>
          </div>

          <div className="ele">
            <p id="p">Text-C</p>
            <img src={p1} alt="Project Thumbnail" />
            <p>It is a text utilization application used to utilize text, based on React.</p>
            <div className="btn">
              <a href="" target="_blank" id="bt12">
                Demo
              </a>
              <a href="" target="_blank" id="btn2">
                Code
              </a>
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

export default Project;
