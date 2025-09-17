import { useSelector } from "react-redux";

const SlideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if( !isMenuOpen ) return null;

  return (
    <div className="py-2 px-6 shadow-lg w-[14%] text-lg">
      <ul className="py-4 space-y-2">
        <li>🏠 Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold">You</h1>
      <ul className="py-2 space-y-2">
        <li>History</li>
        <li>Playlists</li>
        <li>Your Vdeos</li>
        <li>Your Courses</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul className="py-2 space-y-2">
        <li>Shoping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default SlideBar;