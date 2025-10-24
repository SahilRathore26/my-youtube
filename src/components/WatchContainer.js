import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slideBarSlice";
import { useSearchParams } from "react-router-dom";

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-12">
      <iframe
        width="1000"
        height="526"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="A.I Career Options for Engineers - Complete Guide | Freshers &amp; Working Professional"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchContainer;
