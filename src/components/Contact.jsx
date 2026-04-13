import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-[60vh] min-w-full items-center justify-center py-24 px-4 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[800px] flex flex-col items-center justify-center gap-8 p-12 md:p-20 rounded-[3rem] bg-card border border-border premium-shadow text-center relative overflow-hidden group hover:scale-[1.01] transition-transform duration-700"
      >
        {/* Subtle Decorative Accents (Earthy glow inside card) */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 dark:bg-accent/5 rounded-full blur-[80px] pointer-events-none transition-all duration-1000 group-hover:scale-150"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-[80px] pointer-events-none transition-all duration-1000 group-hover:scale-150"></div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground relative z-10">
          Ready to Connect?
        </h2>

        <p className="text-lg text-foreground/70 max-w-md relative z-10">
          Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:majd.dayoub04@gmail.com"
          className="px-10 py-4 mt-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl relative z-10"
        >
          Say Hello
        </motion.a>
        
        <div className="flex gap-8 mt-8 relative z-10 pt-8 border-t border-border/50 w-full justify-center">
          <a
            href="https://www.linkedin.com/in/majddayoub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors flex flex-col items-center gap-2 group/link"
          >
            <BsLinkedin size={28} className="transition-transform group-hover/link:-translate-y-1" />
            <span className="text-xs font-semibold opacity-0 group-hover/link:opacity-100 transition-opacity">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Majd-Dayoub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors flex flex-col items-center gap-2 group/link"
          >
            <BsGithub size={28} className="transition-transform group-hover/link:-translate-y-1" />
            <span className="text-xs font-semibold opacity-0 group-hover/link:opacity-100 transition-opacity">GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
