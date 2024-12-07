import { useNavigate } from "react-router-dom";
import { REGIONS } from "../../pages/RegionSection/utils/constants";
import { REGIONS_NAMES } from "../../utils/constants";
import logo from "./assets/images/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  const goToRegionSection = (regionName) => {
    const regionData = REGIONS.find((region) => region.NAME === regionName);
    const regionDepartments = regionData.DEPARTMENTS;

    navigate("/region", {
      state: { regionName, regionDepartments },
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
