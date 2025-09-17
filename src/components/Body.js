import SlideBar from "./SlideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="overflow-y-auto">
        <SlideBar />
      </div>
      <div className="overflow-y-auto">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
