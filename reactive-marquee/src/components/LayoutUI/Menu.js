import React from 'react';
 
import { NavLink } from 'react-router-dom';

  
const Menu = ({data, handleClick, active}) => {
   
    // if(page.slug === window.location.pathname.replace('/','')) {
    //     background = page.blocks[0].background.replace('.jpg','')
    //   }

    return (
       <div className="navlinks">
           
    {data.map(page => 
        
    (
    
    <NavLink to={`/${page.slug}`} key={page.slug} onClick={handleClick} className={page.slug === window.location.pathname.replace('/','') ? "navlinks__link navlinks__link--active" : "navlinks__link navlinks__link--unactive"}>{page.title}</NavLink> 
    
    )
    
    )}

       </div>
    );
}
 
export default Menu;