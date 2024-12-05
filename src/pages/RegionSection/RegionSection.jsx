import { useLocation, useNavigate } from "react-router-dom";
import "./RegionSection.css";
import { REGIONS } from "./utils/constants";

export const RegionSection = () => {
  const {
    state: { regionName, regionDepartments },
  } = useLocation();
  const navigate = useNavigate();

  const goToDepartmentSection = (name) => {
    const dishes = REGIONS[regionName].DEPARTMENTS[name].DISHES;

    navigate("/department", {
      state: { departmentName: name, departmentDishes: dishes },
    });
  };

  return (
    <section className="region">
      <h1 className="region__title">{regionName}</h1>
      <div className="region__departments">
        {regionDepartments.map((department, index) => (
          <div key={index} className="region__department">
            <img
              src={department.image}
              alt="Departamento"
              className="region__department-image"
            />
            <p
              className="region__department-name"
              onClick={() => goToDepartmentSection(department.name)}
            >
              {department.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
