import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-contact'>
        <p className='footer-contact-heading'>
         
        </p>
        <p className='footer-contact-text'>
          Hey, email if you feel like talking.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Email Me</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'> © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='GitHub'
              >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
