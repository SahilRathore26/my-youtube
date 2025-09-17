import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slideBarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <div className="flex h-14 justify-between shadow-lg w-full items-center">
      <div className="flex px-3 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu-icon"
          src="https://th.bing.com/th/id/OIP.K5-GCbctqquBSaEgQnVEYgHaHa?w=187&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        ></img>
        <img
          className="h-14"
          alt="youtube-logo"
          src="https://vectorseek.com/wp-content/uploads/2021/01/white-1024x478.jpg"
        ></img>
      </div>
      <div className="flex justify-center w-4/6">
        <input className="h-10 w-1/2 p-4 border border-black rounded-l-full" type="text" placeholder="Search"/>
        <button className="h-10 py-2 px-6 border border-black rounded-r-full bg-gray-100">
          <img className="w-[20px]" alt="search-button" src="https://www.downloadclipart.net/large/search-button-png-image-free-download.png"></img>
        </button>
      </div>
      <div>
        <img
          className="h-8 px-3"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
