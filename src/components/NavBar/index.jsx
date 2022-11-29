import CartWidjet from '../CartWidjet';
import React from 'react';
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <NavLink className="nav__link" to='/'>MiMarca</NavLink>
                </div>
                <ul className="nav__list">
                  <li>
                    <NavLink className="nav__link" to='/categoria'>Peliculas</NavLink>
                  </li>
                  <li>
                     <NavLink className="nav__link" to='/categoria'>Series</NavLink>
                  </li>
                  <li>
                      <NavLink className="nav__link" to='/cart'>
                            <CartWidjet />
                      </NavLink>
                  </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;