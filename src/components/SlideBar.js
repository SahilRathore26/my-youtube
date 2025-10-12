import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SlideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if( !isMenuOpen ) return null;

  return (
    <div className="fixed py-2 px-6 text-lg w-48">
      <ul className="py-4 space-y-2">
        <li><Link to={"/"}>🏠 Home</Link></li>
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
      {/* <h1 className="font-bold">Explore</h1>
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
      </ul> */}
    </div>
  );
};

export default SlideBar;