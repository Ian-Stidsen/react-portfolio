
import LLRegnskab from '../assets/ll-regnskab.jpg';
import Converter from '../assets/converter.jpg';
import Speedtype from '../assets/speedtype.jpg';


function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <div className='row'>
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
          <img className='card-img' src={Converter} alt='LL Regnskab'></img>
          <div className='card-body card-img-overlay'>
            <p className='card-text'>
              I made this project using React, bootstrap and a currency API.
            </p>
            <button className='btn btn-dark'>Click to visit</button>
          </div>
        </a>

        <a className='card' href='/speedtype'>
          <h6 className='card-header'>Speedtype Game</h6>
          <img className='card-img' src={Speedtype} alt='LL Regnskab'></img>
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
    </div>
  );
};

export default Projects;