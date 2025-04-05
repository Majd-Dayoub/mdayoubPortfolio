import React, { useState, useEffect } from 'react';

const AnimatedTitle = () => {
  const titles = ["Cloud", "Data", "Software"];
  const staticPart = " Engineer"
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === titles[currentTitle].length) {
      typingSpeed = 1500; // Pause when the full text is displayed
      setTimeout(() => setIsDeleting(true), typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length); // Move to the next word
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : titles[currentTitle].slice(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitle]);

  return (
    <h3 className="text-3xl md:text-5xl font-semibold leading-normal inline-block py-1 transition-all duration-500 ease-in-out transform opacity-80">
  <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
    {displayedText}
  </span>
  <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">{staticPart}</span>
</h3>
  );
};

export default AnimatedTitle;
