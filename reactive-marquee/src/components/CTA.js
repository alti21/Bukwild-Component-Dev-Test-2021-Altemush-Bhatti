import React from 'react';
import Link from './Misc/Link';

const CTA = ({text}) => (
    <div className="cta">
        <p>{text}</p>
        <Link text="Let's talk." className="navlinks__link--talk"/>
    </div>
)

export default CTA;