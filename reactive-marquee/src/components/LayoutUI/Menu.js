import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({data, handleClick}) => (
   <div className="navlinks">   
      {data.map(page => (
                           <NavLink 
                              to={`/${page.slug}`} 
                              key={page.slug} 
                              onClick={handleClick} 
                              className={page.slug === window.location.hash.replace('#/','') ? "link__menu link--active" : "link__menu link--unactive"}>
                                 {page.title}
                           </NavLink> 
                        )
               )
      }
   </div>
)

export default Menu;