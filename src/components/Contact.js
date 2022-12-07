import React from'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import emailjsAPI from '../data/emailjsAPI';

function Contact () {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsAPI.serviceId,
        emailjsAPI.templateId,
        form.current,
        emailjsAPI.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        }, 
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact md-4">
      <h2 className="h1-responsive font-weight-bold text-center my-2">Contact me</h2>
      <p className="text-center w-responsive mx-auto mb-5">
        You can contact me here, if you have any questions. 
        Or you can click the links below.
      </p>

      <div className="row">
        <div className="col-12 mb-5">
          <form ref={form} id="contact-form" name="contact-form" action="mail.php" method="POST">
          <div className="row">
              <div className="col-12">
                <div className="md-form mb-1">
                  <div className='input-group'>
                    <div className='input-group-text'>Name</div>
                    <input type="text" id="name" name="user_name" className="form-control" placeholder='Your name'></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="md-form mb-1">
                  <div className='input-group'>
                    <div className='input-group-text'>@</div>
                    <input type="text" id="email" name="user_email" className="form-control" placeholder='Your email'></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-3">
                <div className="md-form">
                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder='Message'></textarea>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <button className="btn btn-primary" onClick={sendEmail}>Send</button>
          </div>
          <div className="status"></div>
        </div>
        <div className="col text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <a href='https://github.com/Ian-Stidsen' target='_blank' rel='noopener noreferrer'>
                Github: Ian Stidsen
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/ian-lund-stidsen-02aa51248/' target='_blank' rel='noopener noreferrer'>
                LinkedIn: Ian Lund Stidsen
              </a>
            </li>
            <li>
              <a href='tel:+299244103'>Mobile: (+299)244103</a>
            </li>
            <li>
              <a href='mailto:ianstidsen@gmail.com'>Email: ianstidsen@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;