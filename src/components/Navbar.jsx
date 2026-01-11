import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX, BiEnvelope } from "react-icons/bi";
import logo from "/mdayoub-logo.png";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
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
    { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/majddayoub", color: "hover:text-blue-500" },
    { icon: <BsGithub />, href: "https://github.com/Majd-Dayoub", color: "hover:text-purple-500" },
    { icon: <BiEnvelope />, href: "mailto:majd.dayoub04@gmail.com", color: "hover:text-red-500" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full flex justify-center py-6 px-4"
    >
      <div className="glass flex w-full max-w-[1200px] items-center justify-between rounded-full bg-black/40 px-6 py-3 text-white backdrop-blur-xl border-white/10 shadow-lg shadow-purple-900/10">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <motion.img
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/50 transition-all"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-white transition-all">
            Majd Dayoub
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors">
              <li>{link.name}</li>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </ul>

        {/* Socials & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.li 
                key={index} 
                whileHover={{ y: -2 }}
                className={`cursor-pointer text-xl text-gray-400 transition-all ${social.color}`}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="md:hidden text-2xl cursor-pointer text-white" onClick={menuOpen}>
            {isOpen ? <BiX /> : <BiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 right-0 mx-4 glass rounded-2xl flex flex-col items-center gap-6 py-10 bg-black/90 md:hidden z-40"
          >
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white hover:tracking-wider transition-all"
                >
                  <li>{link.name}</li>
                </a>
              ))}
            </ul>
            
            <div className="w-16 h-[1px] bg-white/10"></div>
            
            <ul className="flex gap-6">
              {socialLinks.map((social, index) => (
                <li key={index} className="text-2xl text-gray-400 hover:text-white transition-colors">
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
