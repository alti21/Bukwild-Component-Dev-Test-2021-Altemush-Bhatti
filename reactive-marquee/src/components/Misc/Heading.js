import React from 'react';

const Heading = ({headingLevel, text, className}) => {

    const Title = headingLevel;

    return (
    <Title className={className}>{text}</Title>
    )
}

export default Heading;