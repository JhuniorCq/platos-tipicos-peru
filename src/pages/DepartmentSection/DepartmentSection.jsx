import { useLocation } from "react-router-dom";
import { DishDepartment } from "../../components/DishDepartment/DishDepartment";
import { Miskito } from "../../components/Miskito/Miskito";
import { useState } from "react";
import { DishHistoryModal } from "../../components/DishHistoryModal/DishHistoryModal";
import { Loader } from "../../components/Loader/Loader";
import "./DepartmentSeccion.css";

export const DepartmentSection = () => {
  const [selectedDishData, setSelectedDishData] = useState({
    loading: false,
    error: null,
  });
  const [showDishHistoryModal, setShowDishHistoryModal] = useState(false);

  const {
    state: { departmentName, departmentDishes },
  } = useLocation();

  const hideDishHistoryModal = () => {
    setShowDishHistoryModal(false);
  };

  return (
    <>
      {selectedDishData.loading && <Loader />}
      <section className="department">
        <h1 className="department__title">{departmentName}</h1>
        <div className="department__dishes">
          {departmentDishes.map((dish) => (
            <DishDepartment
              key={dish.ID}
              image={dish.IMAGE}
              dishName={dish.NAME}
              departmentName={departmentName}
              setSelectedDishData={setSelectedDishData}
              setShowDishHistoryModal={setShowDishHistoryModal}
            />
          ))}
        </div>
        <Miskito
          positionStyle="miskito__box-position--right"
          sizeStyle="miskito__image-size--region-section"
        />
        <DishHistoryModal
          dishName={selectedDishData.dishName}
          disImage={selectedDishData.dishImage}
          dishHistory={selectedDishData.dishHistory}
          knowHistory={showDishHistoryModal}
          hideDishHistoryModal={hideDishHistoryModal}
        />
      </section>
    </>
  );
};
