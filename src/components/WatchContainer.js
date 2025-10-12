import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slideBarSlice";

const WatchContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      Watch Container
    </div>
  );
};

export default WatchContainer;