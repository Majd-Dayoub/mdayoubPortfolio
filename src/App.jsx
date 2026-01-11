import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import MouseBackground from "./components/MouseBackground";

function App() {
  return (
    <>
      <MouseBackground />

      <main className="flex flex-col items-center px-4 md:px-10 lg:px-20 max-w-7xl mx-auto overflow-x-hidden selection:bg-primary selection:text-white">
        <Navbar />
        <Hero />
        <Tech />
        <div className="w-full my-20">
          <Experience />
        </div>
        <div className="w-full mb-20">
          <Projects />
        </div>
        <Contact />
      </main>
    </>
  );
}

export default App;
