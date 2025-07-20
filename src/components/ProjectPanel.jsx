import React from "react";
import WebsiteIcom from "../assets/website.svg";

function ProjectPanel() {
  const Projects = [
    {
      title: "Dharti International",
      description:
        "I built the website for Dharti International Foundation, a platform that connects people through nature. Users can explore activities, join communities, and engage with organization who loves nature.",
      live: "https://dif-web-mu.vercel.app/",
      image: "/dif_team.png",
    },
    {
      title: "DIF-Admin Panel",
      description:
        "I developed the Admin Panel for Dharti International Foundation,all data coming and updation from the database for fast, secure, and community-driven , showcasing its features, roadmap, and seamless wallet integration.",
      live: "https://dif-web-mu.vercel.app/admin/login",
      image: "/dif_admin.png",
    },
    {
      title: "E-commerce Website",
      description: "I developed the E-commerce designed and developed Including Admin Panel for product add, update, delete (Backend on Railway and Frontend on vercel) in 5 days bootcamp by Think Academies, a fast, secure, and community",
      live: "https://rajchlothzy.vercel.app/",
      image: "/ecommerce.png",
    },
    {
      title: "E-commerce-Admin Panel",
      description: "I developed the E-commerce designed and developed Including Admin Panel for product add, update, delete (Backend on Railway and Frontend on vercel) in 5 days bootcamp by Think Academies, a fast, secure, and community",
      live: "https://rajchlothzy.vercel.app/admin",
      image: "/ecommerceAdmin.png",
    },
    {
      title: "Real-Time Leaderboard Application",
      description:"Select one of the users, claim random points for that selected user, and dynamically display user rankings based on total points. The backend(Railway)- NodeJS completely, and the frontend(vercel)- ReactJS (Basic Ui).",
      live: "https://real-time-leaderboard-app.vercel.app",
      image: "/leaderboard.png",
    },
    {
      title: "University Website",
      description:
        "I developed the website for the School of Engineering at JNU, showcasing their B.Tech program, faculty, and events. It also provides essential information about admissions and academic resources for prospective students.",
      live: "https://soe-jnu.vercel.app/",
      image: "/soe-jnu.png",
    },
    {
      title: "Login Authentication",
      description:
        "I developed the Login-authentication to role based for Dharti International Foundation admin users, a fast, secure, and community-driven , showcasing its features, roadmap, and seamless wallet integration.",
      live: "https://login-auth-orpin.vercel.app/",
      image: "/login_auth.png",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-12 md:px-24 lg:px-32 bg-white py-16">
      <h2 className="font-bold text-black text-2xl md:text-5xl text-center">
        My Projects
      </h2>
      <p className="text-center text-textBlackColor pt-2 px-2 text-sm sm:text-base mt-2">
        This collection showcases projects highlighting skills and expertise
        applied in real-world scenarios.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        {Projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPanel;

const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-textWhiteColor p-4 shadow-md w-full max-w-[350px] rounded-xl flex flex-col items-center">
      {/* Image */}
      <img
        loading="lazy"
        src={project.image}
        className="w-full h-48 object-cover rounded-md"
        alt="Project"
      />

      {/* Project Details */}
      <div className="py-4 flex flex-col items-center justify-between h-[270px] xl:h-[330px]">
        <div>
          <h5 className="font-bold text-2xl text-black text-center">
            {project.title}
          </h5>
          <p className="text-base text-textBlackColor pt-3 text-center">
            {project.description}
          </p>
        </div>
        {/* Icon Links */}
        <div className="flex gap-4 mt-4 bg-black">
          <a href={project.live} target="_blank" rel="noreferrer">
            <img
              loading="lazy"
              src={WebsiteIcom}
              alt="Website"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
