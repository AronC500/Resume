import Home from "./SideHero.jsx";
import Projects from "./SideProject.jsx";
import Experiences from "./SideExperience.jsx";
import Name from "./SideName.jsx";
import Arrow from "./SideMode.jsx";
import { useState } from "react";

function SideBar() {
  const [color, setColor] = useState("Home");

  return (
    //. Setting top: 0, for example, tells the browser to stick the element to the
    //top of its parent block when the element's top edge reaches the top of the
    // viewport.
    <div className="sticky top-0 text-base border-white mt-5 min-w-screen flex items-center">
      <Name />
      <div className=" mt-2 white flex gap-10 ml-24 mr-28">
        <Home isActive={color === "Home"} onClick={() => setColor("Home")} />
        <Experiences
          isActive={color === "Experiences"}
          onClick={() => setColor("Experiences")}
        />
        <Projects
          isActive={color === "Projects"}
          onClick={() => setColor("Projects")}
        />
      </div>
      <Arrow />
    </div>
  );
}

export default SideBar;
