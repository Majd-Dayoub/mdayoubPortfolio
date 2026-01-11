import imagePool from "/pool-image.png";
import Premierbet from "/Premierbet-image.png";
import imageTripbuddy from "/tripbuddyLogo.png";

import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGoogleCloud,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { motion } from "motion/react";

const projectsData = [
  {
    image: Premierbet,
    title: "Premier Bets",
    description:
      "A real-time betting simulator leveraging live Premier League data. Users place strategic wagers in a risk-free environment, tracking performance against actual match outcomes.",
    technologies: ["Node.js", "React", "Tailwind CSS", "Supabase"],
    icons: [BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoPostgresql],
    liveDemo: "",
    repository: "https://github.com/Majd-Dayoub/premier-bets",
  },
  {
    image: imageTripbuddy,
    title: "Trip Buddy",
    description:
      "Intelligent travel companion that crafts personalized itineraries. Powered by Gemini AI, it transforms vague travel ideas into detailed, day-by-day plans with local insights.",
    technologies: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
      "Gemini AI",
    ],
    icons: [
      BiLogoReact,
      BiLogoNodejs,
      BiLogoTailwindCss,
      BiLogoFirebase,
      BiLogoGoogleCloud,
    ],
    liveDemo: "",
    repository: "https://github.com/Majd-Dayoub/trip-planner",
  },
  {
    image: imagePool,
    title: "Pool Simulator",
    description:
      "A physics-accurate 8-ball simulation built from scratch. Features custom collision detection, realistic friction, and complete game rules enforcement.",
    technologies: ["Python", "Javascript", "HTML", "CSS", "SQL"],
    icons: [
      BiLogoPython,
      BiLogoJavascript,
      BiLogoHtml5,
      BiLogoCss3,
      BiLogoPostgresql,
    ],
    liveDemo: "",
    repository: "https://github.com/Majd-Dayoub/FullStackPoolSimulator",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full"
    >
      {/* Image Container - Always on left */}
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 aspect-video shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover md:object-contain bg-slate-900/50 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {project.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed text-base font-light border-l-2 border-purple-500 pl-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 my-2">
           {project.technologies.map((tech, i) => {
             const Icon = project.icons[i];
             return (
               <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono tracking-wider hover:bg-white/10 transition-colors cursor-default">
                 {Icon && <Icon className="text-purple-400" />}
                 {tech}
               </span>
             );
           })}
        </div>

        <div className="flex gap-4 mt-2">
          {project.liveDemo && (
             <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
               Visit Site <span className="text-xl">↗</span>
             </a>
          )}
          {project.repository && (
             <a href={project.repository} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white border-b border-gray-500 pb-1 hover:text-gray-300 transition-colors">
               GitHub <BsGithub />
             </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="flex min-h-screen w-full flex-col items-center gap-20 py-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2">
          My Projects
        </h2>
        <p className="text-gray-300 max-w-lg mx-auto text-base md:text-lg font-light">
          A showcase of challenges solved and products built.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 w-full max-w-[1000px]">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
