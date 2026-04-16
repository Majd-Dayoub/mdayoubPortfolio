import { motion } from "motion/react";
import mhicaLogo from "/mhica-logo.png";
import purolatorLogo from "/purolator.png";
import cooperatorsLogo from "/cooperators-logo.png";

const experienceData = [
  {
    company: "Co-operators Insurance",
    logo: cooperatorsLogo,
    website: "https://www.cooperators.ca",
    role: "Cloud Engineer Co-op",
    period: "January 2026 – Present",
    location: "Toronto, Canada",
    responsibilities: [
      "Architected and deployed an end-to-end audit management platform using Python (FastAPI) and containerized infrastructure on Azure, processing 2,000+ server ownership records quarterly; reduced manual audit effort by 65% and saved 400+ engineering hours annually.",
      "Developed a backend automation service using Python FastAPI to process shared mailbox requests and programmatically generate enterprise tickets, eliminating manual workflows and saving 500+ hours annually.",
      "Configured and maintained Azure DevOps CI/CD pipelines and DevOps infrastructure, automating builds, test execution, and deployment workflows for microservices; improved release reliability across development and production environments.",
    ],
  },
  {
    company: "Purolator Inc.",
    logo: purolatorLogo,
    website: "https://www.purolator.com",
    role: "Data Engineer Co-op",
    period: "May 2025 – August 2025",
    location: "Toronto, Canada",
    responsibilities: [
      "Built and maintained ETL pipelines using Python, SQL and Pandas to integrate and transform multi-source data into analysis-ready datasets, supporting actionable insights.",
      "Deployed Python scripts using Azure Functions and SQL Database, automating weekly data refreshes and eliminating 5+ hours of manual work weekly.",
      "Implemented automated reporting pipelines using Python to pull data from QlikView via REST APIs and generate reports, eliminating 8+ hours of manual work weekly.",
      "Engineered complex data transformations on 1M+ records weekly, delivering insights that guided logistics planning and optimized resource allocation.",
    ],
  },
  {
    company: "Mitsubishi Heavy Industries Aerospace Inc.",
    logo: mhicaLogo,
    website: "https://www.mhi.com",
    role: "Software Engineer Co-op",
    period: "May 2024 – December 2024",
    location: "Toronto, Canada",
    responsibilities: [
      "Designed and implemented key features for an aircraft scheduling application using C#, .NET, and Bootstrap, enhancing operational efficiency by 30% and improving overall performance.",
      "Implemented unit tests in C#, achieving 100% code coverage for my contributions and proactively identifying critical bugs, reducing production issues.",
      "Developed and optimized SQL scripts, improving data retrieval efficiency by 25% and enhancing reporting accuracy.",
      "Authored and maintained documentation for software projects using Confluence, and managed version control with Git.",
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <div
      className="sticky w-full"
      style={{
        // Dynamic top spacing to create the overlapping deck effect
        top: `calc(15vh + ${index * 2.5}rem)`,
        zIndex: index,
        paddingBottom: "4rem", // Provides scroll padding between cards
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.01]"
      >
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between border-b border-border/50 pb-8">
            <a
              href={exp.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-6 group"
              aria-label={`Visit ${exp.company} website`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] bg-white p-3 flex items-center justify-center shadow-sm shrink-0 border border-black/5 dark:border-white/10 premium-shadow">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col min-w-0">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {exp.role}
                </h3>
                <h4 className="text-xl text-primary font-medium mt-1">
                  {exp.company}
                </h4>
              </div>
            </a>

            <div className="flex flex-col md:items-end text-sm md:text-base text-foreground/60 font-medium">
              <span className="px-4 py-1.5 rounded-full bg-background border border-border">
                {exp.period}
              </span>
              <span className="mt-2 text-foreground/50">{exp.location}</span>
            </div>
          </div>

          {/* Body Content - Instantly Readable */}
          <div className="pl-2 md:pl-6 border-l-2 border-primary/20">
            <ul className="space-y-4">
              {exp.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="text-base md:text-lg text-foreground/80 leading-relaxed font-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center py-32 px-4 relative"
    >
      <div className="w-full max-w-[1000px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-foreground">
            Experience
          </h2>
          <p className="text-foreground/70 text-lg">
            Where I've applied my skills to solve real-world problems.
          </p>
        </motion.div>

        {/* The Stacking Container */}
        <div className="relative flex flex-col w-full pb-[10vh]">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
