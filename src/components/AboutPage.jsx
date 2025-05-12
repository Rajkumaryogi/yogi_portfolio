import React from "react";

function AboutPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white pt-0 lg:pt-16">
        {/* left  */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-8 lg:mb-0">
          <img
            src="https://i.pinimg.com/736x/09/6b/53/096b53da91d3e807d53419aea798376d.jpg"
            alt="About"
            loading="lazy"
            className="w-full max-w-[450px] md:h-[400px] h-[300px] rounded-xl"
          />
        </div>
        {/* right  */}
        <div className="w-full lg:w-[60%]">
          <h1 className="font-bold text-textBlackColor text-4xl sm:text-5xl md:text-6xl text-center sm:text-start">
            About me
          </h1>

          <p className="text-center sm:text-start text-textBlackColor pt-4 pb-6 text-base sm:text-lg !leading-[36px]">
            I'm Computer Science Engineering undergrad aspiring to become a
            skilled software developer. I'm an avid learner and always looking
            for opportunities to increase my skill set.
            I'm currently working on my skills in the field of Web Development. 
            I'm also a competitive programmer and enjoy problem solving.
            I'm also a big fan of open source and I'm looking to collaborate on projects that can help the
            community.
          </p>
          <div className="flex justify-center items-center sm:inline">
            <a
              href="https://drive.google.com/file/d/1nj2PGzdATWy57ENjRSebpX2_wCFI11i9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <button className="all-btn-outline mx-auto">Get CV</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
