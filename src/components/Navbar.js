import React from 'react';
import {Link} from "react-router-dom";
import Countdown from './Countdown';

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <Link to="/">Start</Link>
        <Link to="/boende">Boende</Link>
        <Link to="/plats">Plats</Link>
        <Link to="osa">OSA</Link>
      </div>
      
      <Countdown />
    </div>
  )
}

export default Navbar