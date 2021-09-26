import "./Header.css";
import React from 'react';
import logo from './logo.png';

const Header = () => {
    return (
        <div className="header-bar">
            <div className="header-section">
                <div className="image-section">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav">
                    <a className="page-nav actv" href="/home">Home</a>
                    <a className="page-nav" href="/contact">Contact</a>
                    <a className="page-nav" href="/hireUs">Hire Us</a>
                    <a className="page-nav" href="/ourServices">Our Services</a>
                </div>
            </div>
        </div>
    );
};

export default Header;