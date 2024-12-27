import imagePool from "/public/pool-image.png";
import imageSorting from "/public/sorting-image.png";
import imageMancala from "/public/mancala-image.png";
import { motion } from "framer-motion";
const projectsData = [
  {
    image: imagePool,
    title: "Pool Simulator",
    description: "Full-stack web application to simulate an 8-ball pool game",
    technologies: ["Python", "Javascript", "HTML", "CSS", "SQL"],
    liveDemo: "",
    repository: "https://github.com/Majd-Dayoub/FullStackPoolSimulator"
  },
  {
    image: imageSorting,
    title: "Algorithm Sorting Visualizer",
    description: "Interactive web application for visualizing sorting algorithms",
    technologies: ["React", "Bootstrap"],
    liveDemo: "https://majd-dayoub.github.io/SortingVisualizer/",
    repository: "https://github.com/Majd-Dayoub/SortingVisualizer"
  },
  {
    image: imageMancala,
    title: "Mancala",
    description: "Mancala board game created entirley with Java",
    technologies: ["Java", "JUnit"],
    liveDemo: "",
    repository: "https://github.com/Majd-Dayoub/Mancala"
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-slate-800 p-2">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Live Demo
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
