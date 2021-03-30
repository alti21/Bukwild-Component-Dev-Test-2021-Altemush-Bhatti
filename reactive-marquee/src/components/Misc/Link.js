import React from 'react';

const Link = ({text, className, icon, iconClass}) => (
    <a href="/#" className={className}>{text}<i className={iconClass}>{icon}</i></a>
)

export default Link