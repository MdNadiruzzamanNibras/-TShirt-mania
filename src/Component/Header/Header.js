import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <h1>This is T-Shirt Mania</h1>
            <Link to='/home'>Home</Link>
            <Link to='/OrderReview'>OrderReview</Link>
        </nav>
    );
};

export default Header;