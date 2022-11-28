import React from 'react';
import { useRef } from 'react'
import './App.css';
import LLRegnskab from './img/ll-regnskab.jpg';

function App() {
  const introRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();

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
      case 'Portfolio':
        projectsRef.current.scrollIntoView();
        break;
      default:
        break;
    }
  }

  function sendMail() {
    console.log('sent');
  };
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={scrollLink}>Intro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={scrollLink}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={scrollLink}>Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={scrollLink}>Contact</a>
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
            I'm passionate about learning new things about in programming and love to make websites/apps.
          </p>
        </section>
        <section className='projects' ref={projectsRef}>
          <h1>My projects</h1>
          <div className='card-group'>
            <a className='card' href='https://www.llregnskab.gl'>
              <h6 className='card-header'>LL Regnskab ApS</h6>
              <img className='card-img' src={LLRegnskab} alt='LL Regnskab'></img>
              <div className='card-body card-img-overlay'>
                <p className='card-text'>
                  I made this website for my mothers company, using jQuery.
                </p>
                <button className='btn btn-dark'>Click to visit</button>
              </div>
            </a>

            <a className='card' href='/currency-calculator'>
              <h6 className='card-header'>Currency Calculator</h6>
              <img className='card-img' src={LLRegnskab} alt='LL Regnskab'></img>
              <div className='card-body card-img-overlay'>
                <p className='card-text'>
                  I made this project using React, bootstrap and a currency API.
                </p>
                <button className='btn btn-dark'>Click to visit</button>
              </div>
            </a>

            <a className='card' href='/speedtype'>
              <h6 className='card-header'>Speedtype Game</h6>
              <img className='card-img' src={LLRegnskab} alt='LL Regnskab'></img>
              <div className='card-body card-img-overlay'>
                <p className='card-text'>
                  I made this project using vanilla javascript.
                </p>
                <button className='btn btn-dark'>Click to visit</button>
              </div>
            </a>

            <a className='card' href='/todo-list'>
              <h6 className='card-header'>TodoList</h6>
              <img className='card-img' src={LLRegnskab} alt='LL Regnskab'></img>
              <div className='card-body card-img-overlay'>
                <p className='card-text'>
                  This project was my first React and bootstrap project.
                </p>
                <button className='btn btn-dark'>Click to visit</button>
              </div>
            </a>
          </div>
        </section>

        <section className="md-4" ref={contactRef}>
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
          <p className="text-center w-responsive mx-auto mb-5">
            You can contact me here, if you have any questions.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">Your name</label>
                      <input type="text" id="name" name="name" className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">Your email</label>
                      <input type="text" id="email" name="email" className="form-control"></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control"></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>                          <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <button className="btn btn-primary" onClick={sendMail}>Send</button>
              </div>
              <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href='tel:+299244103'>Mobile: (+299)244103</a>
                </li>
                <li>
                  <a href='mailto:ianstidsen@gmail.com'>Email: ianstidsen@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;