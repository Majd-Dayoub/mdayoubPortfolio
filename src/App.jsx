import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,hsl(var(--primary))_100%)] opacity-20"></div>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

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
