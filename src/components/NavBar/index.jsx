import React from "react";
import CartWidjet from "../CartWidjet/Index";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">LOGo</a>
                </div>
                <ul className="nav__list">
                  <li>
                      <a className="nav__link" href="#">Tienda</a>
                  </li>
                  <li>
                      <a className="nav__link" href="#">contact</a>
                  </li>
                  <li>
                      <a className="nav__link" href="#">
                            <CartWidjet/>
                      </a>
                  </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;