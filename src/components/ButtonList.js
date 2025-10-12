import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Himalayas",
    "Indian pop music",
    "Podcasts",
    "Mixes",
    "Arijit Singh",
    "News",
    "Guitar chords",
    "Data Structures",
    "Indian soap operas",
  ];

  return (
    <div className="bg-white">
      <div className="fixed z-40 flex whitespace-nowrap w-screen bg-white ">
        {buttonList.map((button, index) => (
          <div key={index} className="flex-shrink-0">
            <Button name={button} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
