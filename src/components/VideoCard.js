const VideoCard = ({info}) => {
  console.log(info);
  const {snippet, statistics} = info;
  const {channelTitle, thumbnails, title} = snippet;
  return (
    <div className="mx-4 my-2 w-72">
      <img className="rounded-lg" alt="video_thumbnail" src={thumbnails.medium.url}/>
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;