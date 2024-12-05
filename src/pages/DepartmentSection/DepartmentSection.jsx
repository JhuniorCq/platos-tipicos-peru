import { useLocation } from "react-router-dom";
import "./DepartmentSeccion.css";
import { useEffect } from "react";

export const DepartmentSection = () => {
  const {
    state: { departmentName, departmentDishes },
  } = useLocation();

  // const dishesKeys = Object.keys(departmentDishes);
  const dishes = Object.keys(departmentDishes).map(
    (dishKey) => departmentDishes[dishKey]
  );

  // console.log(dishesKeys, dishes);

  return (
    <section className="department">
      <h1 className="department__title">{departmentName}</h1>
      <div className="department__dishes">
        {dishes.map((dish, index) => (
          <div key={index} className="department_dish">
            <img
              src={dish.IMAGE}
              alt="Plato típico"
              className="department__dish-image"
            />
            <h2 className="department__dish-name">{dish.NAME}</h2>
            <div className="department__dish-options">
              <butto className="department__dish-option department__learn-more">
                CONOCE MÁS
              </butto>
              <butto className="department__dish-option department__history-ai">
                CONOCE SU HISTORIA CON MISKITO
              </butto>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
