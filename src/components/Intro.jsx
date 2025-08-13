import MyImg from "../assets/Photo_Pass.JPG";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="relative min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-br from-white to-blue-50 w-full overflow-hidden py-6">
      {/* Animated background elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-xl"></div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 py-12 lg:py-0 space-y-6"
      >
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 text-center lg:text-left leading-tight">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            Rajkumar Yogi
          </span>
        </h1>

        <div className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left h-auto min-h-[3rem]">
          I'm{" "}
          <span className="text-blue-600">
            <TypeAnimation
              sequence={[
                "a Junior Software Engineer",
                1000,
                "a MERN Stack Developer",
                1000,
                "a Problem Solver (DSA - Java)",
                1000,
                "a Backend Developer",
                1000,
                "a React Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold"
            />
          </span>
        </div>

        <p className="text-gray-600 text-lg md:text-xl text-center lg:text-left max-w-2xl leading-relaxed">
          <span className="font-bold text-blue-600">Hello!</span> I’m a final-year{" "}
          <strong>B.Tech CSE student at JNU</strong> with a passion for
          building secure, scalable, and user-focused applications. Skilled in
          <strong> Data Structures & Algorithms (Java)</strong>, MERN stack
          development, AWS, Docker, deployment and full-cycle software engineering, I create solutions
          that are efficient, reliable, and impactful.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 w-full sm:w-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contacts"
            className="w-full sm:w-auto"
          >
            <button className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Hire Me →
            </button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/document/d/1y89-dms9A_yrdGTGdYxlhec5QoLTcgZS5zvrDhIDQ9s/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full px-8 py-3 bg-white border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Get My CV →
            </button>
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mt-8 sm:mt-12 lg:mt-0 w-full lg:w-1/2"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
          <img
            src={MyImg}
            alt="Rajkumar Yogi"
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] aspect-square object-cover rounded-full border-4 border-white shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-30 pointer-events-none animate-spin-slow"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;
