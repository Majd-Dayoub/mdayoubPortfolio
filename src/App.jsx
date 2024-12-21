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
      {/*Background snippet*/}
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <main className="flex flex-col items-center px-3 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <div className="mb-7">
          {" "}
          {/* Reduced margin below Experience */}
          <Experience />
        </div>
        <div className="mt-4">
          {" "}
          {/* Reduced margin above Projects */}
          <Projects />
        </div>
        <Contact />
      </main>
    </>
  );
}

export default App;
