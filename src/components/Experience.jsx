import { motion } from "framer-motion";
import { useState } from "react";
import mhicaLogo from "/mhica-logo.png";
import mhwLogo from "/mhw-logo.png";
import purolatorLogo from "/purolator.png";

const experienceData = [
  {
    company: "Purolator Inc.",
    logo: purolatorLogo,
    role: "Data Engineer Co-op",
    period: "May 2025 – August 2025",
    location: "Toronto, Canada",
    responsibilities: [
      "Built and maintained ETL pipelines using Python, SQL and Pandas to integrate and transform multi-source data into analysis-ready datasets, supporting actionable insights.",
      "Deployed Python scripts using Azure Functions and SQL Database, automating weekly data refreshes and eliminating 5+ hours of manual work weekly.",
      "Implemented automated reporting pipelines using Python to pull data from QlikView via REST APIs and generate reports, eliminating 8+ hours of manual work weekly.",
      "Engineered complex data transformations on 1M+ records weekly, delivering insights that guided logistics planning and optimized resource allocation",
    ],
  },
  {
    company: "Mitsubishi Heavy Industries Aerospace Inc.",
    logo: mhicaLogo,
    role: "Software Engineer Co-op",
    period: "May 2024 – December 2024",
    location: "Toronto, Canada",
    responsibilities: [
      "Designed and implemented key features for an aircraft scheduling application using C#, .NET, and Bootstrap, enhancing operational efficiency by 30% and improving overall performance.",
      "Implemented unit tests in C#, achieving 100% code coverage for my contributions and proactively identifying critical bugs, reducing production issues.",
      "Developed and optimized SQL scripts, improving data retrieval efficiency by 25% and enhancing reporting accuracy.",
      "Created and automated workflows using Power Apps and Power Automate to streamline business processes, reducing manual effort and increasing operational efficiency.",
      "Authored and maintained documentation for software projects using Confluence, and managed version control with Git.",
    ],
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index, isLast, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const visibleResponsibilities = isOpen
    ? experience.responsibilities
    : experience.responsibilities.slice(0, 2);

  return (
    <div className="relative flex gap-6">
      {/* Timeline dot and connector */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-purple-400 ring-4 ring-purple-900/70 shadow-lg shadow-purple-500/40" />
        {!isLast && (
          <div className="mt-1 w-px flex-1 bg-gradient-to-b from-purple-500/60 via-purple-700/40 to-transparent" />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02, translateY: -2 }}
        transition={{ duration: 0.25 }}
        className="group relative w-full"
      >
        {/* Glow border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 opacity-40 blur-xl group-hover:opacity-70 transition-opacity pointer-events-none" />

        <div className="relative z-10 rounded-2xl border border-purple-600/70 bg-gradient-to-br from-purple-900/80 via-purple-950/90 to-slate-950/90 p-5 md:p-6 shadow-xl shadow-black/50">
          {/* Header */}
          <button
            type="button"
            className="flex w-full justify-between items-start gap-4 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex items-center gap-4 text-left">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-md group-hover:blur-lg transition-all" />
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="relative w-20 h-20 rounded-full border-2 border-purple-300/80 bg-slate-950 object-contain p-1"
                />
              </div>
              <div>
                <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <h4 className="text-sm md:text-base text-purple-200/90">
                  {experience.company}
                </h4>
                <div className="mt-2 flex flex-wrap gap-2 text-xs md:text-sm">
                  <span className="rounded-full bg-purple-900/70 border border-purple-500/50 px-3 py-1 text-purple-100">
                    {experience.period}
                  </span>
                  <span className="rounded-full bg-slate-900/80 border border-purple-500/40 px-3 py-1 text-purple-100">
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 shrink-0 rounded-full bg-purple-900/70 border border-purple-500/70 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-purple-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </motion.div>
          </button>

          {/* Body */}
          <motion.div
            initial={false}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="mt-4"
          >
            <ul className="list-disc space-y-2 pl-5 text-purple-100 text-sm md:text-[0.9rem] leading-relaxed">
              {visibleResponsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>

            {experience.responsibilities.length > 2 && (
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="mt-3 inline-flex items-center gap-2 text-xs md:text-sm text-purple-200/90 hover:text-white transition-colors"
              >
                {isOpen ? "Show less" : "Show full story"}
                <span className="h-px w-6 bg-purple-300/80" />
              </button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center gap-12 p-4 md:px-14 md:py-20 mb-8"
    >
      <ScrollReveal>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.3em] uppercase text-purple-300/70">
            Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-purple-100">
            Experience
          </h1>
          <p className="max-w-xl text-center text-sm md:text-base text-purple-200/80">
            A timeline of roles where I have designed systems, automated workflows,
            and turned data into decisions.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative w-full max-w-3xl md:max-w-4xl">
        {/* Faint central timeline line */}
        <div className="absolute left-[0.9rem] md:left-[1.05rem] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-purple-900/40 to-transparent pointer-events-none" />

        <div className="flex flex-col gap-10">
          {experienceData.map((experience, index) => (
            <ScrollReveal key={index}>
              <ExperienceCard
                experience={experience}
                index={index}
                isLast={index === experienceData.length - 1}
                defaultOpen={index === 0}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
