import { motion } from "motion/react";
import { useState } from "react";
import mhicaLogo from "/mhica-logo.png";
import purolatorLogo from "/purolator.png";

const experienceData = [
  {
    company: "Purolator Inc.",
    logo: purolatorLogo,
    role: "Software Engineer Co-op",
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
      "Authored and maintained documentation for software projects using Confluence, and managed version control with Git.",
    ],
  }
];

const ExperienceCard = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
    >
      {/* Dot on line */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10 hidden md:block">
        <div className="absolute inset-0 animate-ping rounded-full bg-purple-500 opacity-75"></div>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-1/2 group cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="glass p-6 md:p-8 rounded-3xl border-white/10 bg-white/5 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] hover:bg-white/10 hover:-translate-y-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-5 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-xl p-2.5 flex items-center justify-center border border-white/10 shadow-inner shrink-0">
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-1 flex flex-col gap-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap truncate">{exp.role}</h3>
                <h4 className="text-lg text-purple-300 font-medium">{exp.company}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-200 font-medium mt-1">
                  <span>{exp.period}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Collapsible Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-3 pl-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="text-sm md:text-base text-gray-300/90 leading-relaxed flex gap-3">
                    <span className="text-purple-500 mt-1">▹</span>
                    <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Expand/Collapse Indicator */}
            <div className={`w-full flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest transition-all duration-300 ${isOpen ? 'mt-4' : 'mt-2'}`}>
              {isOpen ? 'Show Less' : 'Click for Details'}
            </div>
          </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-1/2"></div>
      
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="flex w-full flex-col items-center gap-12 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
          My professional journey and contributions.
        </p>
      </motion.div>

      <div className="relative flex flex-col gap-12 w-full max-w-[900px] px-4">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent transfrom -translate-x-1/2 md:translate-x-0 hidden md:block"></div>
        
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
