import {
  BiLogoBootstrap,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoAws
} from "react-icons/bi";
import { TbBrandCSharp} from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const techItems = [
    { icon: <BiLogoTypescript className="text-sky-500" />, label: "TypeScript" },
    { icon: <BiLogoNodejs className="text-green-600" />, label: "Node.js" },
    { icon: <BiLogoPython className="text-yellow-500" />, label: "Python" },
    { icon: <BiLogoAws className="text-orange-500" />, label: "AWS" },
    { icon: <FaDatabase className="text-blue-500" />, label: "SQL" },
    { icon: <TbBrandCSharp className="text-white" />, label: "C#" },

  ];

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techItems.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]">
              {tech.icon}
            </div>
            <p className="mt-2 text-sm text-white">{tech.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
