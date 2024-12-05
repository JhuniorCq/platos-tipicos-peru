import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/images/logo.png";

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__title-box">
          <img src={logo} alt="Logo" className="header__logo" />
          <h1 className="header__title">LA MESA PERUANA</h1>
        </div>
        <ul className="header__navbar-options">
          <li className="header__option">
            <NavLink>SIERRA</NavLink>
          </li>
          <li className="header__option">
            <NavLink>COSTA</NavLink>
          </li>
          <li className="header__option">
            <NavLink>SELVA</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
