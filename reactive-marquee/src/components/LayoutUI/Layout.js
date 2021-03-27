import React from 'react';
import Menu from './Menu';
import logo from '../../logo/abc.svg';

const Layout = ({data, style, handleClick}) => (
        <div className="layout" style={style}>
            <img src={logo} className="App-logo" alt="logo"/>
            <Menu data={data} handleClick={handleClick} />
        </div>
    )

export default Layout;