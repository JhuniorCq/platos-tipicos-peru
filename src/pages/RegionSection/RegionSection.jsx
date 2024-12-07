import { useLocation, useNavigate } from "react-router-dom";
import { Miskito } from "../../components/Miskito/Miskito";
import "./RegionSection.css";

export const RegionSection = () => {
  const {
    state: { regionName, regionDepartments },
  } = useLocation();
  const navigate = useNavigate();

  const goToDepartmentSection = (departmentName) => {
    const departmentData = regionDepartments.find(
      (department) => department.NAME === departmentName
    );

    const departmentDishes = departmentData.DISHES;

    navigate("/department", {
      state: { departmentName, departmentDishes },
    });
  };

  return (
    <section className="region">
      <h1 className="region__title">{regionName}</h1>
      <div className="region__departments">
        {regionDepartments.map((department) => (
          <div key={department.ID} className="region__department">
            <img
              src={department.IMAGE}
              alt={department.NAME}
              className="region__department-image"
            />
            <p
              className="region__department-name"
              onClick={() => goToDepartmentSection(department.NAME)}
            >
              {department.NAME}
            </p>
          </div>
        ))}
      </div>
      <Miskito
        positionStyle="miskito__box-position--right"
        sizeStyle="miskito__image-size--region-section"
      />
    </section>
  );
};
