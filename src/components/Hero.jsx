import logo from "/mdayoub-logo.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-20 max-w-[1200px]">
        
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Majd Dayoub
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-2"
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-300 font-serif italic">
              Aspiring <span className="text-primary font-normal not-italic">Software Engineer</span>
            </h3>
            <p className="text-gray-400 max-w-lg leading-relaxed text-sm md:text-base">
              I am a third-year Computer Science student passionate about Cloud and Software Engineering. 
              Hands-on experience with <span className="text-white">AWS, Azure, SQL</span>, and full-stack development using 
              <span className="text-white"> Python, C#, React</span>. I build scalable cloud solutions and automate processes.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex gap-4 mt-4"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-white">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 flex justify-center items-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            {/* Spinning ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/20" 
            />
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-2xl"></div>
            
            <img
              src={logo}
              alt="Majd Dayoub"
              className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl shadow-purple-900/40 z-10"
            />

            {/* Floating badges removed as per request */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
