import { useEffect, useState } from "react";

function Projects({ isActive, onClick }) {
  const [yesAnimation, setYesAnimation] = useState(false);

  useEffect(() => {
    setYesAnimation(true);

    // Cleanup function
    return () => {
      setYesAnimation(false);
    };
  }, []);

  return (
    <div
      id={`${yesAnimation ? "Projects" : ""}`}
      onClick={onClick}
      className={`${isActive ? "text-yellow-400" : "text-white"} text-sm   opacity-0 font-medium cursor-pointer`}
    >
      Projects
    </div>
  );
}
export default Projects;
