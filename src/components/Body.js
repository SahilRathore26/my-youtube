import SlideBar from "./SlideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="absolute flex top-12">
      <SlideBar />
      <Outlet />
    </div>
  );
};

export default Body;
