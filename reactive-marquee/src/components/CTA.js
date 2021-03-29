import React from 'react';
import Link from './Misc/Link';
import { BsArrowRight } from "react-icons/bs";

const CTA = ({text}) => 
{
   
return (
    <div className="cta">
        <p>{text}</p>
        <Link text="Let's talk." className="navlinks__link--talk" icon={ <BsArrowRight /> }/>
    </div>
)
}
export default CTA;