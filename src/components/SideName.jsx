import { useEffect, useState } from "react";

function Name() {
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
      id={`${yesAnimation ? "Name" : ""}`}
      className="text-white  min-w-96 text-center tracking-widest text-3xl  opacity-0  font-extralight  "
    >
      aron chen
    </div>
  );
}
export default Name;
