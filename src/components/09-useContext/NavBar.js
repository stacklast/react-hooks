import React from 'react';

import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home </NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About </NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login </NavLink>
                </ul>
                
            </div>
            </nav>
    )
}
