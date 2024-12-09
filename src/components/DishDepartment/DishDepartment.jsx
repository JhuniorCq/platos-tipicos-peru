import { Link } from "react-router-dom";
import { askMiskito } from "../../utils/geminiIA";
import "./DishDepartment.css";

export const DishDepartment = ({
  image,
  dishName,
  departmentName,
  setSelectedDishData,
  setShowDishHistoryModal,
}) => {
  const getDishHistory = async (message) => {
    if (!message) return;

    setSelectedDishData({
      loading: true,
    });
    const dishHistory = await askMiskito(message);

    setSelectedDishData({
      dishName,
      dishImage: image,
      dishHistory,
      loading: false,
      error: null,
    });
    setShowDishHistoryModal(true);
  };

  return (
    <div className="department-dish">
      <img src={image} alt={dishName} className="department-dish__image" />
      <h2 className="department-dish__name">{dishName}</h2>
      <div className="department-dish__options">
        <Link
          to="/miskito"
          state={{
            ask: `Quiero que me des la preparación e ingredientes para este plato "${dishName}", el cual es del departamento "${departmentName}".`,
          }}
          className="department-dish__option department-dish__learn-more"
        >
          CONOCE MÁS
        </Link>
        <button
          className="department-dish__option department-dish__history-ai"
          onClick={() =>
            getDishHistory(
              `Quiero que me des la historia del plato "${dishName}", el cual es del departamento "${departmentName}"`
            )
          }
        >
          CONOCE SU HISTORIA CON MISKITO
        </button>
      </div>
    </div>
  );
};
