import React from 'react';
import Heading from './Misc/Heading';


const Marquee = ({data, background}) => {

return(

    <div className={`marquee  ${background}`}>

        <Heading headingLevel="h1" text={data.blocks[0].headline}/>
        <Heading headingLevel="h2" text={data.blocks[0].subhead}/>
        


    </div>
)}

export default Marquee;


//data.blocks[0].background