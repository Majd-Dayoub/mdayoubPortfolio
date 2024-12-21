import logo from "/public/mdayoub-logo.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{y:-50, opacity:0}}
          animate ={{y:0, opacity:1}}
          transition={{ duration:0.8, delay:0.2}}
        >
          <img
            src={logo}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px]"
          />
        </motion.div>

        <motion.div initial={{y:50, opacity:0}}
          animate ={{y:0, opacity:1}}
          transition={{ duration:0.8, delay:0.2}} className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl md:text-7xl font-light">
            Majd Dayoub
          </h1>
          <h3 className="bg-gradient-to-r to-pink-500 from-blue-500 bg-clip-text text-transparent opacity-80 text-5xl md:text-4xl font-light">
            Software Engineer Intern
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400 ">
            I am a third-year Computer Science student with experience in
            full-stack development. I am skilled in back-end technologies like
            C#, SQL, and Express.js, as well as front-end frameworks and tools
            including Tailwind CSS, Bootstrap, and React.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
