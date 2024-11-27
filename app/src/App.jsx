import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {
  const [menu,setmenu]=useState('home');
  return (
    <div className="body">
      <Navbar menu={menu} setmenu={setmenu}/>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
