import logo from "/mdayoub-logo.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center py-20 px-4 mt-10 md:mt-0"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-16 md:gap-20 max-w-[1000px]">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-2"
            >
              Majd Dayoub
            </motion.h1>
          </div>

          <div className="flex flex-col gap-4 overflow-hidden">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-serif text-primary"
            >
              Backend & Data Engineer
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-foreground/70 max-w-lg leading-relaxed text-base tracking-wide"
            >
              Building scalable systems and cloud architecture with a focus on performance, automation, and impact. Experienced with{" "}
              <span className="text-foreground font-semibold">Python</span>,{" "}
              <span className="text-foreground font-semibold">FastAPI</span>,{" "}
              <span className="text-foreground font-semibold">Azure</span>, and{" "}
               <span className="text-foreground font-semibold">TypeScript</span>.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
          >
            <a
              href="#experience"
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all text-center premium-shadow"
            >
              View Experience
            </a>
            <a
              href="mailto:majd.dayoub04@gmail.com"
              className="px-8 py-3.5 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative w-[280px] h-[320px] md:w-[340px] md:h-[420px] group [perspective:1000px]">
            {/* Offset Accent Shadow (Organic minimalist design) */}
            <div className="absolute -inset-4 md:-inset-6 bg-accent rounded-[2rem] opacity-30 dark:opacity-20 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 pointer-events-none"></div>
            <div className="absolute -inset-4 md:-inset-6 bg-secondary rounded-[2rem] opacity-40 dark:opacity-20 -translate-x-3 -translate-y-3 group-hover:-translate-x-5 group-hover:-translate-y-5 transition-transform duration-700 pointer-events-none"></div>
            
            {/* 3D Flip Container */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Face (Actual Photo) */}
              <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden bg-card border border-border premium-shadow [backface-visibility:hidden]">
                <img
                  src="/majd-pic.png"
                  alt="Majd Dayoub"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Back Face (Logo) */}
              <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden bg-card border border-border premium-shadow [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover filter contrast-[1.05] grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
