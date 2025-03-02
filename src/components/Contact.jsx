import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>
        <div className="flex justify-between items-center gap-5">
          <a
            href="https://www.linkedin.com/in/majddayoub"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-amber-50 text-blue-500"
          >
            <BsLinkedin className="w-28 h-28 md:w-28 md:h-28 sm:w-16 sm:h-16" />
          </a>

          <a
            href="https://github.com/Majd-Dayoub"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-amber-50 text-orange-600"
          >
            <BsGithub className="w-28 h-28 md:w-28 md:h-28 sm:w-16 sm:h-16" />
          </a>
        </div>

        <p className="text-center text-lg font-semibold text-gray-500">
          Want to connect? Send me an E-mail and I'll respond as soon as
          possible.
        </p>
        <a
          href="mailto:mdayoub@uoguelph.ca"
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
