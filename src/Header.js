import React from 'react';
import logo from './logo_transparent_default.png';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="HeaderLogo">
                    <img src={logo} className="Logo" alt="logo" />
                </div>
                <div className="HeaderMenu">
                    <div className="HeaderMenuItem">
                        <h3 className="HeaderItemText">Home</h3>
                    </div>
                    <div className="HeaderMenuItem">
                        <h3 className="HeaderItemText">About us</h3>
                    </div>
                    <div className="HeaderMenuItem">
                        <h3 className="HeaderItemText">Work</h3>
                    </div>
                    <div className="HeaderMenuItem">
                        <h3 className="HeaderItemText">Info</h3>
                    </div>
                    <div className="HeaderMenuItem">
                        <h3 className="HeaderItemText">Get Started</h3>
                    </div>
                </div>
                {/* <h1>Header</h1> */}
            </div>
        )
    }
}