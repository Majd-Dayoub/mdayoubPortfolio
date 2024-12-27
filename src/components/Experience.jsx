import { motion } from "framer-motion";
import { useState } from "react";
import mhicaLogo from "/public/mhica-logo.png";
import mhwLogo from "/public/mhw-logo.png";

const experienceData = [
  {
    company: "Mitsubishi Heavy Industries Aerospace Inc.",
    logo: mhicaLogo,
    role: "Software Engineer Intern",
    period: "May 2024 – January 2025",
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
    company: "MHWMechanical Inc.",
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
    <ScrollReveal>
      <div className="flex flex-col gap-4 p-6 rounded-lg shadow-lg border border-purple-700 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              {experience.role}
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-14 h-14"
              />
            </h3>
            <h4 className="text-lg text-purple-300">{experience.company}</h4>
            <p className="text-sm text-purple-200 font-medium">
              {experience.period}
            </p>
            <p className="text-sm text-purple-200">{experience.location}</p>
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
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-purple-300"
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-purple-200">
            {experience.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    </ScrollReveal>
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
