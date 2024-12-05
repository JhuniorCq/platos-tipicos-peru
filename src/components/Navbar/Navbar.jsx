import { NavLink, useNavigate } from "react-router-dom";
import { REGIONS } from "../../pages/RegionSection/utils/constants";
import { REGIONS_NAMES } from "../../utils/constants";
import logo from "./assets/images/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  const goToRegionSection = (name) => {
    const departmentsKeys = Object.keys(REGIONS[name].DEPARTMENTS);
    const departmentData = departmentsKeys.map((departmentKey) => ({
      name: REGIONS[name].DEPARTMENTS[departmentKey].NAME,
      image: REGIONS[name].DEPARTMENTS[departmentKey].IMAGE,
    }));

    navigate("/region", {
      state: { regionName: name, regionDepartments: departmentData },
    });
  };

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__title-box">
          <img
            src={logo}
            alt="Logo"
            className="header__logo"
            onClick={returnToHome}
          />
          <h1 className="header__title" onClick={returnToHome}>
            LA MESA PERUANA
          </h1>
        </div>
        <ul className="header__navbar-options">
          <li className="header__option">
            <button onClick={() => goToRegionSection(REGIONS_NAMES.SIERRA)}>
              SIERRA
            </button>
          </li>
          <li className="header__option">
            <button onClick={() => goToRegionSection(REGIONS_NAMES.COSTA)}>
              COSTA
            </button>
          </li>
          <li className="header__option">
            <button onClick={() => goToRegionSection(REGIONS_NAMES.SELVA)}>
              SELVA
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
