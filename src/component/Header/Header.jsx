import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/mobile'}>Mobile</NavLink>
                <NavLink to={'/laptops'}>Laptops</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;