import React from 'react';

const Heading = ({headingLevel, text, className}) => {
    const Title = headingLevel;
    // this component can be resued for different heading levels such as h1, h2, h3, etc.
    return (
        <Title className={className}>{text}</Title>
    )
}

export default Heading;