import { motion } from "motion/react";
import mhicaLogo from "/mhica-logo.png";
import purolatorLogo from "/purolator.png";
import cooperatorsLogo from "/cooperators-logo.png";

const experienceData = [
  {
    company: "Co-operators Insurance",
    logo: cooperatorsLogo,
    website: "https://www.cooperators.ca",
    role: "Cloud Engineering Co-op",
    period: "January 2026 - Present",
    location: "Toronto, Canada",
    responsibilities: [
      "Developing core features for a full-stack audit management platform using Python (FastAPI), TypeScript, and Azure, enabling audit teams to manage and track server ownership across 250+ users and 2,000+ records while reducing manual audit effort by 90%.",
      "Building an automated backend service using Python (FastAPI) and the ServiceNow API to process enterprise ticket requests in the background, eliminating manual fulfillment workflows and saving 500+ hours annually.",
      "Containerizing full-stack applications with Docker and implementing GitHub Actions CI/CD workflows to standardize builds, automate testing, and improve deployment consistency.",
      "Designing PostgreSQL data models and background processing workflows to automate data updates, with monitoring and alerting to maintain system reliability.",
    ],
  },
  {
    company: "Purolator Inc.",
    logo: purolatorLogo,
    website: "https://www.purolator.com",
    role: "Data Engineering Co-op",
    period: "May 2025 - August 2025",
    location: "Toronto, Canada",
    responsibilities: [
      "Built a report automation platform using Python, FastAPI, Azure Functions, and Blob Storage to automate scheduled report generation, distribution, and storage, reducing manual reporting effort by 1,000+ hours annually.",
      "Engineered ETL pipelines using Python, SQL, and Pandas to transform and consolidate data from 4+ enterprise sources into operational KPI datasets, processing over 2M records weekly.",
      "Designed Azure SQL Database tables for temperature-controlled trailer utilization data, enabling BI teams to report on trailer usage by region and capacity trends.",
    ],
  },
  {
    company: "Mitsubishi Aerospace Inc.",
    logo: mhicaLogo,
    website: "https://www.mhi.com",
    role: "Software Engineering Co-op",
    period: "May 2024 - December 2024",
    location: "Toronto, Canada",
    responsibilities: [
      "Designed and implemented core scheduling logic for the Aircraft Production Scheduling system in C# and .NET, automating aircraft sequencing and recommending optimal work center start dates, reducing scheduling errors by 20%.",
      "Built the Device Management dashboard in a .NET application, implementing export, filtering, and analytics features to manage and track factory floor device operations.",
      "Optimized slow-running SQL stored procedures by analyzing execution plans, refactoring inefficient joins, and reducing full-table scans, improving query runtime by 25%.",
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
