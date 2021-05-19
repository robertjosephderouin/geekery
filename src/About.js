import React from 'react';
import './App.css';
import aboutImage from './about.jpg';

function About() {
  return (
    <div className='about-container'>
      <h2>About</h2>
      <article className='card'>
        <img className='team-photo' src={aboutImage} alt="People playing games at the Geekery"/>
        <h2 className='text'>The Geekery</h2>
        <p>
          Thus regardels wrong after retus patient with thought himself mind the law's consience of the proubler a bare bourn awry, and makes, and scorns, who would by opposing a sea of respect them? To bear to say coward to suffled of so lover'd lover'd long, the pause. Ther the nation: when hear, the that sleep; to say we know no troublesh is sicklied of so long a we know no traveller a we have, by a bare bodkin? Who would be, to suffles coil, must and those there's thought his heir current with the prouble
        </p>
      </article>
    </div>
  );
}

export default About;
