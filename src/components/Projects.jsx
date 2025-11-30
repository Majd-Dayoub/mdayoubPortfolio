import imagePool from "/pool-image.png";
import imageSorting from "/sorting-image.png";
import imageMancala from "/mancala-image.png";
import imageTripbuddy from "/tripbuddyLogo.png";
import Premierbet from "/Premierbet-image.png";

import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGoogleCloud,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: Premierbet,
    title: "Premier Bets",
    description:
      "Full stack Premier League betting simulator that lets users place virtual wagers on real match data.",
    technologies: ["Node.js", "React", "Tailwind CSS", "Supabase"],
    icons: [BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoPostgresql],
    liveDemo: "",
    repository: "https://github.com/Majd-Dayoub/premier-bets",
  },
  {
    image: imageTripbuddy,
    title: "Trip Buddy",
    description:
      "AI powered travel planner that generates custom itineraries and trip insights using Gemini and Google APIs.",
    technologies: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
      "Gemini AI & Google API",
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
      "Web application that simulates an 8 ball pool game with physics and full scoring logic.",
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

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal>
      <motion.article
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.25 }}
        className={`relative flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-stretch gap-8 md:gap-12`}
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 opacity-30 blur-2xl md:blur-3xl pointer-events-none" />

        {/* Card content */}
        <div className="relative z-10 flex flex-col md:flex-row w-full rounded-3xl border border-purple-500/40 bg-gradient-to-br from-slate-950/90 via-purple-950/70 to-slate-950/95 shadow-xl shadow-black/60 overflow-hidden">
          {/* Image side */}
          <div className="relative w-full md:w-2/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-transparent to-sky-500/30 mix-blend-screen pointer-events-none" />

            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-contain bg-slate-950/60 p-6 md:p-8"
              />
            </motion.div>

            <div className="pointer-events-none absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-purple-100 border border-purple-500/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              <span>Featured project</span>
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-purple-300/80">
                  Personal build
                </p>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[0.7rem] text-purple-100 border border-purple-500/40">
                  {project.technologies[0]}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm md:text-[0.95rem] text-purple-100/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech chips */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-purple-300/70 cursor-default">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-3">
                {project.icons.map((Icon, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-2 rounded-full border border-purple-500/40 bg-slate-950/80 px-3 py-1.5 text-[0.8rem] text-purple-50 shadow-sm shadow-purple-900/70 hover:border-purple-300 hover:bg-purple-900/40 transition-all duration-200 cursor-default"
                  >
                    <Icon className="text-lg text-purple-200 group-hover:text-white" />
                    <span>{project.technologies[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-400 transition-colors"
                >
                  Live demo
                </a>
              )}
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-400 transition-colors"
                >
                  Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center gap-14 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-purple-300/80">
            Selected work
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white">
            My Projects
          </h1>
          <p className="max-w-2xl text-center text-sm md:text-base text-purple-200/85">
            A mix of full stack builds, visual tools, and game projects that show
            how I think about product, data, and user experience.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex w-full max-w-5xl flex-col gap-14 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
