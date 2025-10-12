import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="relative left-48 flex-1 flex flex-col p-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;