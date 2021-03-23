import React from 'react';
 
import { NavLink } from 'react-router-dom';

  
const Menu = ({data, handleClick}) => {
   

    return (
       <div>
           
           {data.map(page => ( <NavLink to={`/${page.slug}`} key={page.slug} onClick={handleClick}>{page.title}</NavLink> ))}

       </div>
    );
}
 
export default Menu;