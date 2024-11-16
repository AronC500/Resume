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
    <div className=" flex ml-44 items-center h-[calc(100vh-80px)] min-w-screen">
      <div>
        <div className="inline-block">
          <p id="ani" className="font-anton">
            Software Engineer
          </p>
        </div>
        <div className="flex pt-0  ">
          <a
            id={`${yesAnimation ? "Logos" : ""}`}
            href="https://www.linkedin.com/in/aron-chen-77656a2b4/"
            target="_blank"
            className="opacity-0"
          >
            {" "}
            <img className=" white w-16  " src={linkin}></img>
          </a>

          <a
            id={`${yesAnimation ? "Logos" : ""}`}
            href="https://github.com/AronC500"
            target="_blank"
            className="opacity-0"
          >
            <img
              className="white w-26 h-36 relative bottom-10  "
              src={gitt}
            ></img>
          </a>
          <a
            id={`${yesAnimation ? "Logos" : ""}`}
            href=""
            target="_blank"
            className="opacity-0"
          >
            <img
              className="white  w-16 h-24 relative bottom-4 "
              src={gmaill}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
