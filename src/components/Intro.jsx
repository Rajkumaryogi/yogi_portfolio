import MyImg from "../assets/Photo_Pass.JPG";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div className="relative min-h-screen flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-[150px] bg-fixed backdrop-blur-[10px] z-0 bg-cover bg-white">
      {/* Left */}
      <div className="z-20 flex flex-col justify-center items-center md:items-start md:w-1/2">
        <h1 className="font-bold text-4xl md:text-6xl text-textBlackColor mt-4 text-center md:text-left">
          I'm{" "}
          <span className="font-bold text-4xl md:text-6xl text-blue-500">
            Rajkumar Yogi
          </span>
        </h1>
        <h1 className="text-black mt-2 text-[2rem] md:text-5xl font-bold py-4 h-[10rem] text-center md:text-left">
          I am a{" "}
          <span className={`!text-blue-500`}>
            <TypeAnimation
              sequence={[
                " Full Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Website Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[2rem] font-bold !text-blue-500"
            />
          </span>
        </h1>

        <p className="text-textBlackColor [text-shadow:2px_2px_4px_rgba(255,255,255,0.2)] font-medium text-lg md:text-xl text-center md:text-left md:-mt-12 -mt-8">
          <span className="font-bold">Hi</span>, I create custom,
          high-performance websites that captivate and convert. No
          templates—just pixel-perfect, responsive designs tailored to your
          brand. My websites don’t just look great; they load faster, perform
          better, and give you a competitive edge.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-8">
          <div className="bg-blue-500">
            <a href="#contacts"  >
              <button className=" all-btn-outline ">Hire Me</button>
            </a>
          </div>
          <div className="bg-blue-500">
            <a
              href="https://drive.google.com/file/d/1nj2PGzdATWy57ENjRSebpX2_wCFI11i9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="all-btn-outline">Get CV</button>
            </a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-center mt-12 md:mt-0">
        <img
          src={MyImg}
          alt="Rajkumar Yogi"
          className="w-[250px] h-[250px] md:w-[450px] md:h-[450px]  aspect-square object-contain rounded-full border-[5px] outline-dashed outline-blue-500 border-transparent"
        />
      </div>
    </div>
  );
}

export default Intro;
