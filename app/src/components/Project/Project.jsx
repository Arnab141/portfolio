import React from 'react'
import "./Project.css";
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
const Project = () => {
  return (
    <>
      <div className="project" id="project">
        <h3>Projects</h3>
        <div className="main">
          <div className="ele">
            <p id="p">Weatherio</p>
            <img src={p2} alt="Project Thumbnail" />
            <p>It is a weather application base in HTML, Css and JavaScript   </p>
            <div className="btn">
              <a href="https://arnab141.github.io/Weather/" target="_blank"  id="btn1" >Demo</a>
              <a href="" target='_blank' id="btn2">Code</a>
            </div>
          </div>

          <div className="ele">
            <p id="p">Text-C</p>
            <img src={p1} alt="Project Thumbnail" />
            <p>It is a text utilization application used to utilize the text,  base in react</p>
            <div className="btn">
            <a href="" target='_blank' id="bt12">Demo</a>
            <a href="" target='_blank' id="btn2">Code</a>
            </div>
          </div>


        </div>
      </div>
      <div id="line1-container">
        <hr id="line1" />
      </div>
    </>
  )
}

export default Project
