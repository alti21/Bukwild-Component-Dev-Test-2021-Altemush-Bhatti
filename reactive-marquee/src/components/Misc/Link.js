import React from 'react';

const Link = ({text, className, icon}) => (
    <a href="/#" className={className}>{text}<i>{icon}</i></a>
)

export default Link