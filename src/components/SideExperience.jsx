import { useEffect, useState } from "react";

function Experiences({ isActive, onClick }) {
  const [yesAnimation, setYesAnimation] = useState(false);
  //useRef to access a DOM node managed by REACT
  useEffect(() => {
    setYesAnimation(true);

    // Cleanup function
    return () => {
      setYesAnimation(false);
    };
  }, []);

  return (
    <div
      id={`${yesAnimation ? "Experiences" : ""}`}
      onClick={onClick}
      className={`${isActive ? "text-yellow-400" : "text-white"} text-sm  opacity-0   font-medium cursor-pointer`}
    >
      Experiences
    </div>
  );
}
export default Experiences;
