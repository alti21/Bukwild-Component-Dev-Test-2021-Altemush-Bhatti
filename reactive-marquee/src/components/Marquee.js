import React from 'react';



const Marquee = ({data, background}) => {

return(

    <div className={`marquee  ${background}`}>

    {data.blocks[0].headline}
    <hr />
    {data.blocks[0].subhead}


    </div>
)}

export default Marquee;


//data.blocks[0].background