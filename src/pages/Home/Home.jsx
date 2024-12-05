import { HomeRegion } from "../../components/HomeRegion/HomeRegion";
import { HOME_REGION_DATA } from "../../components/HomeRegion/utils/constants";
import "./Home.css";

export const Home = () => {
  return <HomeRegion homeRegionData={HOME_REGION_DATA} />;
};
