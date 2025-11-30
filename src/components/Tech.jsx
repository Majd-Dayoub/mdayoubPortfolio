import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoAws,
  BiLogoMicrosoft
} from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

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
    <div
      id="tech"
      className="relative flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-24 overflow-hidden"
    >
      {/* background movement */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-700/30 blur-3xl"
          animate={{ x: [0, 20, -10, 0], y: [0, 10, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-sky-500/25 blur-3xl"
          animate={{ x: [0, -15, 10, 0], y: [0, -10, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-10 p-5"
      >
        {techItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.label}
              className="group flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <motion.div
                className="relative flex items-center justify-center"
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  y: -12,
                }}
              >
                {/* pulsing ring */}
                <motion.div
                  className="pointer-events-none absolute h-28 w-28 rounded-full border border-purple-400/50"
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                />

                {/* glow */}
                <div className="pointer-events-none absolute h-24 w-24 rounded-full bg-purple-500/40 blur-2xl opacity-70 group-hover:opacity-100 group-hover:bg-purple-400/70 transition-all" />

                {/* icon container */}
                <motion.div
                  className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/50 bg-slate-950/80 shadow-xl shadow-black/70 sm:h-28 sm:w-28"
                  whileHover={{
                    boxShadow:
                      "0 0 35px rgba(192, 132, 252, 0.9), 0 0 60px rgba(56, 189, 248, 0.5)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon
                    className={`text-[52px] sm:text-[64px] md:text-[72px] ${tech.color}`}
                  />
                </motion.div>
              </motion.div>

              <motion.p
                className="mt-3 text-sm text-purple-50"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {tech.label}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Tech;

