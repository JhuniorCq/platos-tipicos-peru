import "./HomeRegion.css";
import miskito from "../../assets/images/miskito.png";
import { useEffect, useState } from "react";
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";

export const HomeRegion = ({ homeRegionData }) => {
  const [showTextMiskito, setShowTextMiskito] = useState(false);
  const [index, setIndex] = useState(0);

  const nextPlate = () => {
    setIndex((prev) => (prev === homeRegionData.length - 1 ? 0 : prev + 1));
  };

  const previousPlate = () => {
    setIndex((prev) => (prev === 0 ? homeRegionData.length - 1 : prev - 1));
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
        <Link className="home-region__button">CONOCE MÁS</Link>
      </div>
      <div className="home-region__image-box">
        <img
          src={homeRegionData[index].image}
          alt="Plato típico"
          className="home-region__image"
        />
      </div>
      <div className="home-region__carousel-buttons">
        <GoTriangleLeft
          className="home-region__carousel-button"
          onClick={previousPlate}
        />
        <GoTriangleRight
          className="home-region__carousel-button"
          onClick={nextPlate}
        />
      </div>
      <div className="home-region__miskito-box">
        <img
          src={miskito}
          alt="Miskito"
          className="home-region__miskito"
          onMouseEnter={() => setShowTextMiskito(true)}
          onMouseLeave={() => setShowTextMiskito(false)}
        />
        <p
          className={`home-region__miskito-text ${
            showTextMiskito ? "home-region__miskito-text--show" : ""
          }`}
        >
          PREGÚNTALE A MISKITO
        </p>
      </div>
      <div className="home-region__circle"></div>
    </section>
  );
};
