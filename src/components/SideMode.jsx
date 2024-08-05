import LightMode from "../assets/lightmode.jpeg";
import Moon from "../assets/moon-solid.svg";
import { useState, useEffect } from "react";

function Arrow() {
  const [Imagery, setImagery] = useState(true);
  const [yesAnimation, setYesAnimation] = useState(false);

  function changeImage() {
    setImagery(!Imagery);
  }
  useEffect(() => {
    setYesAnimation(true);

    // Cleanup function
    return () => {
      setYesAnimation(false);
    };
  }, []);

  return (
    <img
      id={`${yesAnimation ? "Mode" : ""}`}
      onClick={changeImage}
      className={` ${Imagery ? `ml-96 mt-1 max-w-10 opacity-0 h-9 cursor-pointer ` : `ml-96 opacity-0 mt-1 max-w-8 h-9 cursor-pointer `}`}
      src={Imagery ? LightMode : Moon}
    ></img>
  );
}
export default Arrow;
