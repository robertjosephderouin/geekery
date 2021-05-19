import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from './logo512.png';
import './App.css';


function Nav() {

  return (
    <nav>
      <Link className="company-logo" to='/'>
        <img src={companyLogo} alt="Geekery Logo" />
      </Link>

      <section>
        <h1>The Geekery</h1>
        <address>
          1800 S Milton Rd #110-111, Flagstaff, AZ 86001
        </address>
        <a href="tel:1-928-744-0296"> 928-774-0296</a>
      </section>
      <ul>
        <Link to='/Events'>
          <li className="nav-links" >Events</li>
        </Link>
        <Link to='/About'>
          <li className="nav-links" >About</li>
        </Link>
        <Link to='/Team'>
          <li className="nav-links" >Team</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
