import { useState, useEffect } from "react";

function Home({ isActive, onClick }) {
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
      id={`${yesAnimation ? "Home" : ""}`}
      onClick={onClick}
      className={`${isActive ? "text-yellow-400" : "text-white"} text-sm    opacity-0  font-medium cursor-pointer`}
    >
      Home
    </div>
  );
}
export default Home;
