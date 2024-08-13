import './App.css';
import { useState } from 'react';
import logo from './images/logo.svg';
import host from './images/image-host.jpg';
import spotify from './images/spotify.svg';
import apple from './images/apple-podcast.svg';
import google from './images/google-podcasts.svg';
import pCasts from './images/pocket-casts.svg';
import bgPattern from './images/bg-pattern-dots.svg';

function App() {
  const [email, setEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setValidationMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = isValidEmail(email);
    if (isValid) {
      alert('You will receive an email to gain access');
      setEmail('');
    } else {
      setValidationMessage('Oops! Check your email');
    }
  };

  return (
    <>
      <img className='pod-logo' src={logo} alt="" />
      <div className='main-content'>
        <div className='product-info'>
          <h1>Publish your podcast <span>everywhere.</span></h1>
          <p>Upload your audio to Pod with a single click. We'll then distribute
             your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts 
             and more!</p>
             <div className='access'>
              <input 
                id='email' 
                type="email"
                name='email'
                placeholder='Email address' 
                value={email}
                onChange={handleChange}
              />
              <button type='submit' onClick={handleSubmit}>Request Access</button>
              {validationMessage && <div className='error'>{validationMessage}</div>}
             </div>
             <div className='socials' >
              <img className='spotify' src={spotify} alt="" />
              <img className='apple' src={apple} alt="" />
              <img className='google' src={google} alt="" />
              <img className='pCasts' src={pCasts} alt="" />
             </div>
        </div>
        <div>
          <img className='host-img' src={host} alt="" />
        </div>
      </div>
      <img className='bg-Pattern' src={bgPattern} alt="" />
    </>
  );
}

export default App;
