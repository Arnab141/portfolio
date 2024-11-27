import React, { useState } from 'react'
import './Navbar.css'


const Navbar = ({ menu, setmenu }) => {

const [mediaOpen,setmediaOpen]=useState(false);

  return (
    <div className="navbar">
      <p>portfolio</p>
      <ul className="navbar-menu">
        <li onClick={() => { setmenu('home') }} className={menu === 'home' ? 'active' : ""} ><a href="#header">home</a></li>
        <li onClick={() => { setmenu('about') }} className={menu === 'about' ? 'active' : ""}> <a href="#about">about me</a> </li>
        <li onClick={() => { setmenu('project') }} className={menu === 'project' ? 'active' : ""} > <a href="#project">project</a> </li>
        <li onClick={() => { setmenu('contact') }} className={menu === 'contact' ? 'active' : ""} > <a href="#contact">contact</a> </li>
      </ul>
      <div className="media-menu">
        <i 
        onClick={()=>{
          mediaOpen?setmediaOpen(false):setmediaOpen(true)
        }} 
        class="fa fa-bars">

        </i>
        <ul className={`media-navbar-menu${mediaOpen?'-open':""}`}>
          <li 
          onClick={()=>{
            setmenu('home')
            setmediaOpen(false)
          }} 
          className={menu==='home'?"media-activ":""}><a href="#header">home</a>
          </li>
          <li
           onClick={()=>{
            setmenu('about')
            setmediaOpen(false)
          }} 
           className={menu==='about'?"media-activ":""}><a href="#about">about me</a>
           </li>
          <li
           onClick={()=>{
            setmenu('project')
            setmediaOpen(false)
          }} 
           className={menu==='project'?"media-activ":""}><a href="#project">project</a>
           </li>
          <li
           onClick={()=>{
            setmenu('contact')
            setmediaOpen(false)
          }} 
           className={menu==='contact'?"media-activ":""}><a href="#contact">contact</a>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
