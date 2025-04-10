import logo from "/mdayoub-logo.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={logo}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl md:text-7xl font-light ">
            Majd Dayoub
          </h1>
          <h3 className="text-3xl md:text-4xl font-semibold leading-normal inline-block py-1 transition-all duration-500 ease-in-out transform opacity-80">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500  bg-clip-text text-transparent">
             Software Engineer
            </span>
          </h3>{" "}
          <p className="md:text-base text-pretty text-sm text-gray-400 mt-5">
            I am a third-year Computer Science student passionate about Cloud
            and Software Engineering. I have hands-on experience with AWS,
            Azure, SQL, Excel, Power BI, and full-stack development using
            Python, C#, React, and SQL. Through internships and projects, I've
            built scalable cloud solutions, developed internal web apps, and
            contributed to operational data analysis and process automation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
