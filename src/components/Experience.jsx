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
  },
  {
    company: "MHW Mechanical Inc.",
    logo: mhwLogo,
    role: "Web Developer",
    period: "May 2023 – September 2023",
    location: "Toronto, Canada",
    responsibilities: [
      "Collaborated with a team in expanding website functionality and enhancing design responsiveness using WordPress, HTML, and CSS.",
      "Ensured the website remained up to date by regularly updating content, adding promotional pages, and integrating new features to enhance user engagement.",
      "Analyzed and visualized data in Excel, generating reports that guided marketing and web development decisions.",
    ],
  },
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

const ExperienceCard = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 p-6 rounded-xl shadow-lg border border-purple-700 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 hover:from-purple-700 hover:to-purple-500"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-16 h-16 rounded-full border-2 border-purple-300"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
            <h4 className="text-lg text-purple-300">{experience.company}</h4>
            <p className="text-sm text-purple-200">{experience.period}</p>
            <p className="text-sm text-purple-200">{experience.location}</p>
          </div>
        </div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-purple-300 hover:text-white transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-4 bg-purple-900 bg-opacity-50 p-4 rounded-md"
        >
          <ul className="list-disc space-y-2 pl-5 text-purple-100">
            {experience.responsibilities.map((task, index) => (
              <li key={index} className="text-sm leading-relaxed">
                {task}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center gap-16 p-4 md:px-14 md:py-16 mb-8"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-purple-200 md:text-6xl">
          Experience
        </h1>
      </ScrollReveal>

      <div className="flex flex-col gap-12 w-full max-w-[800px]">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
