import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { RegionSection } from "../pages/RegionSection/RegionSection";
import { DepartmentSection } from "../pages/DepartmentSection/DepartmentSection";
import { ChatMiskito } from "../pages/ChatMiskito/ChatMiskito";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/region" element={<RegionSection />} />
      <Route path="/department" element={<DepartmentSection />} />
      <Route path="/miskito" element={<ChatMiskito />} />
    </Routes>
  );
};
