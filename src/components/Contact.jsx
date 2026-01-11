import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-[50vh] min-w-full items-center justify-center py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass w-full max-w-[600px] flex flex-col items-center justify-center gap-6 p-10 md:p-14 rounded-3xl border-white/10 bg-black/40 text-center relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 blur-[80px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 blur-[80px] -z-10"></div>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-lg text-gray-400 max-w-sm">
          Want to connect? Send me an email and I'll respond as soon as possible.
        </p>

        <a
          href="mailto:mdayoub@uoguelph.ca"
          className="px-8 py-3 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1"
        >
          Contact Me
        </a>
        
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/majddayoub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <BsLinkedin size={32} />
          </a>
          <a
            href="https://github.com/Majd-Dayoub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <BsGithub size={32} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
