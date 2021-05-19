import React from 'react';
import ReactDOM from 'react-dom';
import companyLogo from './logo512.png';
import logo from './logo.svg';
import './App.css';


function Nav() {
  return (
    <nav>
      <img className="company-logo" src={companyLogo} alt="Geekery Logo" />
      <section>
        <h1>The Geekery</h1>
        <address>
          1800 S Milton Rd #110-111, Flagstaff, AZ 86001
        </address>
        <address>
        (928) 774-0296
        </address>
      </section>
      <ul>
        <li className="nav-links" >Events</li>
        <li className="nav-links" >About</li>
        <li className="nav-links" >Team</li>
      </ul>
    </nav>
  );
}

export default Nav;
