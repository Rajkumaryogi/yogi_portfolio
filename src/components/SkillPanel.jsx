import React from "react";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import JsIcon from "../assets/js.svg";
import TailwindIcon from "../assets/tailwind.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import ReactIcon from "../assets/react.svg";
import ReduxIcon from "../assets/redux.svg";
import NextIcon from "../assets/next.svg";
import nodeJsIcon from "../assets/nodejs.svg";
import expressIcon from "../assets/expressjs.svg";
import typeScriptIcon from "../assets/typescript.svg";
import firebaseIcon from "../assets/firebase.svg";
import mongoDBIcon from "../assets/mongodb.svg";
import gitIcon from "../assets/git.svg";
import DockerIcon from "../assets/docker.svg";
import figmaIcon from "../assets/figma.svg";
import awsIcon from "../assets/aws-icon.svg";
import ejsIcon from "../assets/ejs.jpeg";
import { useDarkMode } from "../context/DarkModeContext";

function SkillPanel() {
  const { darkMode } = useDarkMode();
  const skills = [
    {
      name: "HTML",
      icon: HtmlIcon,
    },
    {
      name: "CSS",
      icon: CssIcon,
    },
    {
      name: "JavaScript",
      icon: JsIcon,
    },
    {
      name: "Tailwind",
      icon: TailwindIcon,
    },
    {
      name: "Bootstrap",
      icon: BootstrapIcon,
    },
    {
      name: "React",
      icon: ReactIcon,
    },
    {
      name: "Redux",
      icon: ReduxIcon,
    },
    {
      name: "Next",
      icon: NextIcon,
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
    },
    {
      name: "Node Js",
      icon: nodeJsIcon,
    },
    {
      name: "Express",
      icon: expressIcon,
    },
    {
      name: "TypeScript",
      icon: typeScriptIcon,
    },
    {
      name: "MongoDB",
      icon: mongoDBIcon,
    },
    {
      name: "Git",
      icon: gitIcon,
    },
    {
      name: "EJS",
      icon: ejsIcon,
    },
    {
      name: "Docker",
      icon: DockerIcon,
    },
    {
      name: "Figma",
      icon: figmaIcon,
    },
    {
      name: "Amazon Web Services",
      icon: awsIcon,
    },
  ];

  return (
    <div className={`w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-16 pb-36 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* top text  */}
      <div className="text-center">
        <h2 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-black'} text-2xl md:text-5xl text-center`}>
          Tech Stack
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-textBlackColor'} pt-2`}>
          These are my skills on the basis of which I have made projects.
        </p>
      </div>
      {/* skills  */}
      <div className="mt-16">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg p-4 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <img
                loading="lazy"
                src={skill.icon}
                alt={skill.name}
                className="w-12 sm:w-20"
                style={darkMode ? { filter: "invert(0.8)" } : {}}
              />
              <p className={`${darkMode ? 'text-gray-100' : 'text-black'} font-bold text-sm sm:text-base text-center`}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillPanel;