import React from 'react';
import {Link} from "react-router-dom";
import Countdown from './Countdown';

// Todo: Style Link - remove underline, change initial color, "visited color", "while pressed color" 
//"and add color to show which one is "active""

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <Link to="/">Start</Link>
        <Link to="/vigsel">Vigsel</Link>
        <Link to="/sittning">Sittning</Link>
        <Link to="/boende">Boende</Link>
        <Link to="osa">OSA</Link>
      </div>
      
      <Countdown />
    </div>
  )
}

export default Navbar