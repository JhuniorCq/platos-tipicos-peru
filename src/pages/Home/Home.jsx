import { HomeRegions } from "../../components/HomeRegion/HomeRegion";
import { HOME_REGION_DATA } from "../../components/HomeRegion/utils/constants";
import "./Home.css";

export const Home = () => {
  return <HomeRegions homeRegionData={HOME_REGION_DATA} />;
};
