import linkin from "../assets/link.svg";
import gitt from "../assets/github.png";
import gmaill from "../assets/gmail.jpg";
import { useEffect, useState } from "react";

function Hero() {
  const [yesAnimation, setYesAnimation] = useState(false);

  useEffect(() => {
    setYesAnimation(true);

    // Cleanup function
    return () => {
      setYesAnimation(false);
    };
  }, []);
  return (
    //82px
    <div className=" flex justify-center items-center  h-[calc(100vh-80px)] border-white min-w-screen">
      <a
        id={`${yesAnimation ? "Home" : ""}`}
        href="https://www.linkedin.com/in/aron-chen-77656a2b4/"
        target="_blank"
      >
        <img className=" white w-16 " src={linkin}></img>
      </a>
      <a
        id={`${yesAnimation ? "Experiences" : ""}`}
        href="https://github.com/AronC500"
        target="_blank"
      >
        <img className="white w-30 h-36 " src={gitt}></img>
      </a>
      <a id={`${yesAnimation ? "Projects" : ""}`} href="" target="_blank">
        <img className="white  w-20 h-24" src={gmaill}></img>
      </a>
    </div>
  );
}

export default Hero;
