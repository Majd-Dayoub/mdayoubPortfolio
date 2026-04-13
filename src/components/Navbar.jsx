import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX, BiEnvelope, BiSun, BiMoon } from "react-icons/bi";
import logo from "/mdayoub-logo.png";
import { motion, AnimatePresence } from "motion/react";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tech", href: "#tech" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/majddayoub" },
    { icon: <BsGithub />, href: "https://github.com/Majd-Dayoub" },
    { icon: <BiEnvelope />, href: "mailto:majd.dayoub04@gmail.com" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full flex justify-center py-6 px-4"
    >
      <div className="flex w-full max-w-[1000px] items-center justify-between rounded-full bg-white/70 dark:bg-black/60 px-6 py-3 text-foreground backdrop-blur-xl border border-black/5 dark:border-white/10 premium-shadow transition-colors duration-500">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-all duration-300">
             <img src={logo} alt="logo" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />
          </div>
          <span className="text-xl font-display font-semibold tracking-tight text-primary transition-colors">
            Majd Dayoub
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="relative group text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              <li>{link.name}</li>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </ul>

        {/* Socials, Mobile Toggle & Theme Toggle */}
        <div className="flex items-center gap-5">
          <ul className="hidden md:flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.li 
                key={index} 
                whileHover={{ y: -2 }}
                className="cursor-pointer text-xl text-foreground/60 hover:text-primary transition-colors"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="w-[1px] h-6 bg-border hidden md:block"></div>
          
          {/* Theme Toggle */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme} 
            className="text-2xl text-foreground/80 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <BiMoon /> : <BiSun />}
          </motion.button>
          
          <div className="md:hidden text-2xl cursor-pointer text-foreground" onClick={menuOpen}>
            {isOpen ? <BiX /> : <BiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 rounded-3xl flex flex-col items-center gap-6 py-10 bg-background/95 border border-border dark:bg-black/90 md:hidden z-40 premium-shadow backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-all"
                >
                  <li>{link.name}</li>
                </a>
              ))}
            </ul>
            
            <div className="w-16 h-[1px] bg-border"></div>
            
            <ul className="flex gap-6">
              {socialLinks.map((social, index) => (
                <li key={index} className="text-2xl text-foreground/60 hover:text-primary transition-colors">
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
