import React from 'react';
import Heading from './Misc/Heading';
import CTA from './CTA';

const Marquee = ({data, background}) => {

return(

    <div className={`marquee  ${background}`}>

        
            <Heading headingLevel="h1" text={data.blocks[0].headline} className="headline"/>
            <Heading headingLevel="h2" text={data.blocks[0].subhead} className="subhead"/>
        
        
        <CTA text={data.blocks[0].cta}/>

    </div>
)}

export default Marquee;


//data.blocks[0].background