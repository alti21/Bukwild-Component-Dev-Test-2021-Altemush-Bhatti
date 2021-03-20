import React from 'react';
import Menu from './Menu';
import logo from '../../logo/abc.svg';

const Layout = ({data}) => (
        <div className="layout">
            <img src={logo} className="App-logo" alt="logo"/>
            <Menu data={data}/>
        </div>
    )

export default Layout;