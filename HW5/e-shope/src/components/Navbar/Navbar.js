import React from 'react';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <ul className="nav-bar">
            <li>
                <NavLink className="nav-bar__item" activeClassName="is-active" to='/home'>
                    home
                </NavLink>
            </li>

            <li>
                <NavLink className="nav-bar__item" activeClassName="is-active" to='/favorites'>
                    favorites
                </NavLink>
            </li>

            <li>
                <NavLink className="nav-bar__item" activeClassName="is-active" to='/cart'>
                    cart
                </NavLink>
            </li>
        </ul>
    );

}

export default Navbar;