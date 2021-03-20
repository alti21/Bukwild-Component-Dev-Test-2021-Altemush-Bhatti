import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Menu = ({data}) => {
    return (
       <div>
          <NavLink to={`/${data.pages[0].slug}`}>{data.pages[0].title}</NavLink>
          <NavLink to={`/${data.pages[1].slug}`}>{data.pages[1].title}</NavLink>
          <NavLink to={`/${data.pages[2].slug}`}>{data.pages[2].title}</NavLink>
       </div>
    );
}
 
export default Menu;