import React from 'react';
import { Link } from 'react-router-dom';

import './projects.css';

import LLRegnskab from '../../assets/ll-regnskab.jpg';
import Converter from '../../assets/converter.jpg';
import Speedtype from '../../assets/speedtype.jpg';
import Todo from '../../assets/todo-list.jpg';


export function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <div className='row'>
        <div className='card'>
          <h6 className='card-header'>LL Regnskab ApS</h6>
          <img className='card-img' src={LLRegnskab} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              I made this website for my mothers company, using jQuery. 
              But then later moved it to react.
            </p>
            <div className='card-links'>
              <a className='project-link' href='https://www.llregnskab.gl' target='_blank' rel='noreferrer'>
                Website
              </a>
              <a className='project-link' href='https://github.com/Ian-Stidsen/react-ll-regnskab' target='_blank' rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <h6 className='card-header'>Currency Calculator</h6>
          <img className='card-img' src={Converter} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              I made this project using React, bootstrap and a currency API.
            </p>
            <div className='card-links'>
              <Link className='project-link' to='/converter/currency'target='_blank' rel='noreferrer'>
                Website
              </Link>
              <a className='project-link' href='https://github.com/Ian-Stidsen/currency-converter' target='_blank' rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <h6 className='card-header'>Speedtype Game</h6>
          <img className='card-img' src={Speedtype} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              This project was one of my first projects made it using vanilla Javascript.
            </p>
            <div className='card-links'>
              <Link className='project-link' to='/speedtype' target='_blank' rel='noreferrer'>
                Website
              </Link>
              <a className='project-link' href='https://github.com/Ian-Stidsen/speedtype-game' target='_blank' rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <h6 className='card-header'>TodoList</h6>
          <img className='card-img' src={Todo} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              I made this mini project using React to learn more about useState hook.
            </p>
            <div className='card-links'>
              <Link className='project-link' to='/todolist' target='_blank' rel='noreferrer'>
                Website
              </Link>
              <a className='project-link' href='https://github.com/Ian-Stidsen/react-todo' target='_blank' rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
