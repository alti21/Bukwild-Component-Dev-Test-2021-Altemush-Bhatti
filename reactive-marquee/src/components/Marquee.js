import React from 'react';

const Marquee = ({data}) => (<div className="marquee">

{data.blocks[0].headline}
<hr />
{data.blocks[0].subhead}


</div>)

export default Marquee;
