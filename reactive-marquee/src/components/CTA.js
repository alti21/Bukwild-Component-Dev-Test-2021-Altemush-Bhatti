import React from 'react';
import Link from './Misc/Link';
import { BsArrowRight } from "react-icons/bs";

const CTA = ({text}) => (
    <div className="cta">
        <p className="cta__text">{text}</p>
        <Link text="Let's talk." className="navlinks__link--talk" icon={ <BsArrowRight /> }/>
    </div>
)

export default CTA;