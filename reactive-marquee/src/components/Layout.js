import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/Industires">Industires</NavLink>
          <NavLink to="/">Services</NavLink>
          <NavLink to="/About">About Us</NavLink>
       </div>
    );
}
 
export default Navigation;