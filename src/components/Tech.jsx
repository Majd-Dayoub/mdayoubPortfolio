import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoAws,
  BiLogoMicrosoft
} from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FiCode, FiCloud, FiDatabase } from "react-icons/fi";
import { motion } from "motion/react";

const Tech = () => {
  const techCategories = [
    {
      title: "Languages & Frameworks",
      icon: FiCode,
      description: "The semantic foundations and ecosystems I use to build scalable logic.",
      colSpan: "md:col-span-2",
      technologies: [
        { icon: BiLogoTypescript, color: "text-[#675647]", label: "TypeScript" },
        { icon: BiLogoPython, color: "text-[#E3BD98]", label: "Python" },
        { icon: TbBrandCSharp, color: "text-[#675647]", label: "C#" },
        { icon: BiLogoNodejs, color: "text-[#6C6E36]", label: "Node.js" },
      ]
    },
    {
      title: "Cloud Infrastructure",
      icon: FiCloud,
      description: "Enterprise ecosystems for reliable hosting and robust DevOps pipelines.",
      colSpan: "md:col-span-1",
      technologies: [
        { icon: BiLogoMicrosoft, color: "text-[#6C6E36]", label: "Azure" },
        { icon: BiLogoAws, color: "text-[#C8BDB0]", label: "AWS" },
      ]
    },
    {
      title: "Database Engineering",
      icon: FiDatabase,
      description: "Data modeling, integration, and high-performance storage solutions.",
      colSpan: "md:col-span-3",
      technologies: [
        { icon: FaDatabase, color: "text-[#3E3B3B] dark:text-[#E3BD98]", label: "SQL & Relational Databases" },
      ]
    }
  ];

  return (
    <section
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 py-24 relative px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
          Core Technologies
        </h2>
        <p className="text-foreground/70 max-w-lg mx-auto text-base">
          A highly structured overview of the toolsets powering my engineering workflow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
        {techCategories.map((category, index) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col gap-6 p-8 rounded-[2.5rem] bg-card border border-border premium-shadow transition-colors hover:bg-background ${category.colSpan} group`}
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-2 premium-shadow text-primary group-hover:scale-110 transition-transform duration-500">
                   <CategoryIcon size={24} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  {category.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-4">
                {category.technologies.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <motion.div
                      key={tech.label}
                      whileHover={{ y: -4, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-background border border-border premium-shadow cursor-default group/tech hover:border-primary/40 transition-colors"
                    >
                      <TechIcon className={`text-2xl ${tech.color} transition-transform group-hover/tech:scale-110`} />
                      <span className="text-sm font-medium text-foreground/90">
                        {tech.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;

