import { Link } from "react-router-dom";
import "./DishDepartment.css";

export const DishDepartment = ({ image, dishName, departmentName }) => {
  return (
    <div className="department-dish">
      <img src={image} alt={dishName} className="department-dish__image" />
      <h2 className="department-dish__name">{dishName}</h2>
      <div className="department-dish__options">
        {/* Para el CONOCE MÁS puedo usar <Link> */}
        <Link
          to="/miskito"
          state={{
            ask: `Deseo que me des la preparación e ingredientes para este plato "${dishName}", el cual es del departamento "${departmentName}".`,
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
