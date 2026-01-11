import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoAws,
  BiLogoMicrosoft
} from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { motion } from "motion/react";

const Tech = () => {
  const techItems = [
    { icon: BiLogoNodejs, color: "text-green-500", label: "Node.js" },
    { icon: BiLogoTypescript, color: "text-sky-500", label: "TypeScript" },
    { icon: BiLogoPython, color: "text-yellow-400", label: "Python" },
    { icon: BiLogoAws, color: "text-orange-400", label: "AWS" },
    { icon: BiLogoMicrosoft, color: "text-blue-400", label: "Azure" },
    { icon: FaDatabase, color: "text-orange-700", label: "SQL" },
    { icon: TbBrandCSharp, color: "text-indigo-200", label: "C#" },
  ];

  return (
    <section
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-12 py-20 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
          Technologies
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
          My primary stack for building scalable applications.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-[1000px] px-4">
        {techItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass p-6 w-32 h-32 md:w-36 md:h-36 rounded-2xl flex flex-col items-center justify-center gap-3 border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group cursor-default"
            >
              <Icon className={`text-5xl ${tech.color} drop-shadow-md transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
              <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">
                {tech.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;

