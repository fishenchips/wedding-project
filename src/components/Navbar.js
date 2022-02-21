import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
        <Link to="/">Start</Link>
        <Link to="/boende">Boende</Link>
        <Link to="/plats">Plats</Link>
        <Link to="osa">OSA</Link>
    </div>
  )
}

export default Navbar