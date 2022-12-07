import React from 'react';
import { useRef } from 'react'

import './Portfolio.css';
import Contact from '../../components/Contact'
import Projects from '../../components/Projects';

function Portfolio() {
  const introRef = useRef(),
      aboutRef = useRef(),
      contactRef = useRef(),
      projectsRef = useRef();

  function scrollLink(link) {
    switch(link.target.innerText) {
      case 'Intro':
        introRef.current.scrollIntoView();
        break;
      case 'About':
        aboutRef.current.scrollIntoView();
        break;
      case 'Contact':
        contactRef.current.scrollIntoView();
        break;
      case 'Projects':
        projectsRef.current.scrollIntoView();
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Ian Lund Stidsen</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav" id='navScroll'>

              <li className="nav-item scroll">
                <button className="nav-link" onClick={scrollLink}>Intro</button>
              </li>
              <li className="nav-item scroll">
                <button className="nav-link" onClick={scrollLink}>About</button>
              </li>
              <li className="nav-item scroll">
                <button className="nav-link" onClick={scrollLink}>Projects</button>
              </li>
              <li className="nav-item scroll">
                <button className="nav-link" onClick={scrollLink}>Contact</button>
              </li>
            </ul>

            <ul className="navbar-nav" id='navLink'>
              <li className="nav-item link">
                <a className="nav-link" href='https://github.com/Ian-Stidsen' target='_blank' rel='noopener noreferrer'>
                  Github
                </a>
              </li>
              <li className="nav-item link">
                <a className="nav-link" href='https://www.linkedin.com/in/ian-lund-stidsen-02aa51248/' target='_blank' rel='noopener noreferrer'>
                  LinkedIn
                </a>
              </li>
              <li className="nav-item link">
                <a className="nav-link" href='mailto:ianstidsen@gmail.com'>Email</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">

        <section className='intro' ref={introRef}>
          <h1 className="intro-title">Ian Lund Stidsen</h1>
          <h2 className="intro-title">Front-end Developer</h2>
        </section>

        <section className="about" ref={aboutRef}>
          <h1 className="about-title">ABOUT ME</h1>
          <p className="about-text">
            My name is Ian Lund Stidsen, i'm a self-taught Front-end developer. 
            I'm passionate about learning new things about programming and love to make websites/apps.
          </p>
        </section>

        <section className='projects' ref={projectsRef}>
          <Projects />
        </section>

        <section className='contact-form' ref={contactRef}>
          <Contact />
        </section>

      </div>
    </div>
  );
}

export default Portfolio;