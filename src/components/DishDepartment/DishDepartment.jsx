import { Link } from "react-router-dom";
import "./DishDepartment.css";

export const DishDepartment = ({ image, name }) => {
  return (
    <div className="department-dish">
      <img src={image} alt={name} className="department-dish__image" />
      <h2 className="department-dish__name">{name}</h2>
      <div className="department-dish__options">
        {/* Para el CONOCE MÁS puedo usar <Link> */}
        <Link
          to="/miskito"
          state={{
            ask: "",
          }}
          className="department-dish__option department-dish__learn-more"
        >
          CONOCE MÁS
        </Link>
        <Link className="department-dish__option department-dish__history-ai">
          CONOCE SU HISTORIA CON MISKITO
        </Link>
      </div>
    </div>
  );
};
