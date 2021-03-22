import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Menu = ({data}) => {
    return (
       <div>
           {data.map(page => ( <NavLink to={`/${page.slug}`}>{page.title}</NavLink> ))}

       </div>
    );
}
 
export default Menu;