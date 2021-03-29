import React from 'react';

const Link = ({text, className, icon}) => {
   // let style = "btn";
    
    return (
       
    
        <a href="/#" className={className}>{text}<i>{icon}</i></a>
    )

}



export default Link