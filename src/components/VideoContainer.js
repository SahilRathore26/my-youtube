import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos[0]) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-wrap top-14">
      {videos.map((video) => (<Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video} /></Link>))}
    </div>
  );
};

export default VideoContainer;