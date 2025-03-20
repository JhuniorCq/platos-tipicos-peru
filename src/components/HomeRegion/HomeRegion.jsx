import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGIONS } from "../../pages/RegionSection/utils/constants";
import { Miskito } from "../Miskito/Miskito";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./HomeRegions.css";

export const HomeRegions = ({ homeRegionData }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextPlate = () => {
    setIndex((prev) => (prev === homeRegionData.length - 1 ? 0 : prev + 1));
  };

  const previousPlate = () => {
    setIndex((prev) => (prev === 0 ? homeRegionData.length - 1 : prev - 1));
  };

  const goToRegionSection = (regionName) => {
    const regionData = REGIONS.find((region) => region.NAME === regionName);
    const regionDepartments = regionData.DEPARTMENTS;

    navigate("/region", {
      state: { regionName, regionDepartments },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      previousPlate();

      return () => clearInterval(interval);
    }, 6000);
  }, []);

  return (
    <section className="home-region">
      <div className="home-region__text-box">
        <h1 className="home-region__title">{homeRegionData[index].title}</h1>
        <p className="home-region__paragraph">
          {homeRegionData[index].paragraph}
        </p>
        <button
          className="home-region__button"
          onClick={() => goToRegionSection(homeRegionData[index].title)}
        >
          CONOCE MÁS
        </button>
      </div>
      <div className="home-region__image-box">
        <img
          src={homeRegionData[index].image}
          alt="Plato típico"
          className="home-region__image"
        />
      </div>
      <Miskito positionStyle="miskito__box-position--right" />
      <div className="home-region__circle"></div>
      <MdOutlineArrowBackIos
        className="home-region__carousel-button home-region__carousel-button--left"
        onClick={previousPlate}
      />
      <MdOutlineArrowForwardIos
        className="home-region__carousel-button home-region__carousel-button--right"
        onClick={nextPlate}
      />
    </section>
  );
};
