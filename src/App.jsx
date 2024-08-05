import SideBar from "./components/SideBar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";

function App() {
  return (
    <div className="flex flex-col">
      <SideBar />
      <Hero />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
