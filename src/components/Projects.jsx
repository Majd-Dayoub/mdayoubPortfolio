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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full group"
    >
      {/* Image Container - Always on left */}
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-[2rem] border border-border premium-shadow group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 bg-white dark:bg-black/40 flex items-center justify-center">
        <div className="relative aspect-video sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden flex items-center justify-center p-8 md:p-12">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-5">
        <h3 className="text-3xl font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        
        <p className="text-foreground/70 leading-relaxed text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 my-2">
           {project.technologies.map((tech, i) => {
             const Icon = project.icons[i];
             return (
               <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-xs text-foreground/80 font-medium tracking-wide transition-colors group-hover:border-primary/30">
                 {Icon && <Icon className="text-primary text-sm" />}
                 {tech}
               </span>
             );
           })}
        </div>

        <div className="flex gap-6 mt-2">
          {project.liveDemo && (
             <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-medium border-b border-primary/30 pb-0.5 hover:border-primary transition-all">
               Visit Site <span className="text-lg leading-none">↗</span>
             </a>
          )}
          {project.repository && (
             <a href={project.repository} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 font-medium hover:text-primary transition-colors">
               <BsGithub size={20} />
               <span>Source Code</span>
             </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="flex min-h-screen w-full flex-col items-center gap-16 py-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground pb-2">
          Projects
        </h2>
        <p className="text-foreground/70 max-w-lg mx-auto text-base">
          A showcase of challenges solved and platforms built.
        </p>
      </motion.div>

      <div className="flex flex-col gap-20 w-full max-w-[1000px] mt-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
