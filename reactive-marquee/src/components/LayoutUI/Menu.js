import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Menu = () => {
    return (
       <div>
          <NavLink to="/Industries">Industries</NavLink>
          <NavLink to="/">Services</NavLink>
          <NavLink to="/About">About Us</NavLink>
       </div>
    );
}
 
export default Menu;