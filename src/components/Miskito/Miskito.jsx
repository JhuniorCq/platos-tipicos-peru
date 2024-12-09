import "./Miskito.css";
import miskito from "../../assets/images/miskito.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Miskito = ({ positionStyle = "", sizeStyle = "" }) => {
  const [showTextMiskito, setShowTextMiskito] = useState(false);
  const navigate = useNavigate();

  const goChatMiskito = () => {
    navigate("/miskito");
  };

  return (
    <div className={`miskito ${positionStyle}`}>
      <img
        src={miskito}
        alt="Miskito"
        className={`miskito__image ${sizeStyle}`}
        onClick={goChatMiskito}
        onMouseEnter={() => setShowTextMiskito(true)}
        onMouseLeave={() => setShowTextMiskito(false)}
      />
      <p
        className={`miskito__text ${
          showTextMiskito ? "miskito__text--show" : ""
        }`}
      >
        PREGÚNTALE A MISKITO
      </p>
    </div>
  );
};
