import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo-1-1.svg';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className='options'>
        <ul>
          <li>
            <Link to="/">
              The Wedding
            </Link>
          </li>
          <li>
            <Link to="/Couple">
              The Couple
            </Link>
          </li>
          <li className="logo">
            <Link to="/">
              <img src={logo} alt="Wedding Logo"></img>
            </Link>
          </li>
          <li>
            <Link to="/Destination">
              The Destination
            </Link>
          </li>
          <li>
            <Link to="/RSVP">
              RSVP
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
