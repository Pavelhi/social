import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';


function Navbar() {
    return( <div className="navbar">
    <NavLink to='/profile'>Profile</NavLink>
    <NavLink to='/messages'>Messages</NavLink>
    <NavLink to='/dialogs'>Dialogs</NavLink>
    <NavLink to='/usersnp'>Users</NavLink>
    </div>);
  }

  export default Navbar