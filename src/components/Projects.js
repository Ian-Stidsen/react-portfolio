import React from 'react';
import { Link } from 'react-router-dom';

import LLRegnskab from '../assets/ll-regnskab.jpg';
import Converter from '../assets/converter.jpg';
import Speedtype from '../assets/speedtype.jpg';
import Todo from '../assets/todo-list.jpg';


export function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <div className='row'>
        <a className='card' href='https://www.llregnskab.gl' target='_blank' rel='noreferrer'>
          <h6 className='card-header'>LL Regnskab ApS</h6>
          <img className='card-img' src={LLRegnskab} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              I made this website for my mothers company, using jQuery. 
              But then later moved it to react.
            </p>
            <button className='btn btn-dark'>Click to visit</button>
          </div>
        </a>

        <Link className='card' to='/converter/currency' target='_blank' rel='noreferrer'>
          <h6 className='card-header'>Currency Calculator</h6>
          <img className='card-img' src={Converter} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              I made this project using React, bootstrap and a currency API.
            </p>
            <button className='btn btn-dark'>Click to visit</button>
          </div>
        </Link>

        <Link className='card' to='/speedtype' target='_blank' rel='noreferrer'>
          <h6 className='card-header'>Speedtype Game</h6>
          <img className='card-img' src={Speedtype} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              This project was one of my first projects made it using vanilla Javascript.
            </p>
            <button className='btn btn-dark'>Click to visit</button>
          </div>
        </Link>

        <Link className='card' to='/todo' target='_blank' rel='noreferrer'>
          <h6 className='card-header'>TodoList</h6>
          <img className='card-img' src={Todo} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              I made this mini project using React to learn more about useState hook.
            </p>
            <button className='btn btn-dark'>Click to visit</button>
          </div>
        </Link>
      </div>
    </div>
  );
};
