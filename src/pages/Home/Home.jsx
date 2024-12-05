import { HomeRegion } from "../../components/HomeRegion/HomeRegion";
import { homeRegionData } from "../../components/HomeRegion/utils/constants";
import "./Home.css";

export const Home = () => {
  return <HomeRegion homeRegionData={homeRegionData} />;
};
