import { useLocation } from "react-router-dom";
import { DishDepartment } from "../../components/DishDepartment/DishDepartment";
import { Miskito } from "../../components/Miskito/Miskito";
import "./DepartmentSeccion.css";

export const DepartmentSection = () => {
  const {
    state: { departmentName, departmentDishes },
  } = useLocation();

  return (
    <section className="department">
      <h1 className="department__title">{departmentName}</h1>
      <div className="department__dishes">
        {departmentDishes.map((dish) => (
          <DishDepartment key={dish.ID} image={dish.IMAGE} name={dish.NAME} />
        ))}
      </div>
      <Miskito
        positionStyle="miskito__box-position--right"
        sizeStyle="miskito__image-size--region-section"
      />
    </section>
  );
};
