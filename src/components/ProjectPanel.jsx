import React from "react";
import { motion } from "framer-motion";
import WebsiteIcom from "../assets/website.svg";

function ProjectPanel() {
  const Projects = [
    {
      title: "Dharti International",
      description: "A platform connecting people through nature with activity exploration and community engagement features.",
      live: "https://dif-web-mu.vercel.app/",
      image: "/dif_team.png",
      tags: ["Node.js", "MongoDB", "EJS", "BootstrapCss"]
    },
    {
      title: "DIF-Admin Panel",
      description: "Admin dashboard with database integration for content management and user administration.",
      live: "https://dif-web-mu.vercel.app/admin/login",
      image: "/dif_admin.png",
      tags: ["Nodejs", "EJS", "BootstrapCss", "JWT"]
    },
    {
      title: "BAJDOLIYA WORKSHOP",
      description: "A Car Service platform where user can add and book service for their car and get updates accordingly",
      live: "https://bajdoliyaworkshop.vercel.app/",
      image: "/bajdoliyaworkshop",
      tags: ["Nodejs", "Reactjs", "TailwindCss", "JWT"]
    },
    {
      title: "BAJDOLIYA WORKSHOP ADMIN",
      description: "Admin dashboard with database integration for service and booking update management and user administration accordingly",
      live: "https://bajdoliyaworkshop.vercel.app/admin",
      image: "/bajdoliyaworkshop_admin",
      tags: ["Nodejs", "Reactjs", "TailwindCss", "JWT"]
    },
    {
      title: "E-commerce Website",
      description: "Full-featured online store with product management and secure checkout.",
      live: "https://rajchlothzy.vercel.app/",
      image: "/ecommerce.png",
      tags: ["Nodejs", "Reactjs", "MongoDB", "Railway"]
    },
    {
      title: "E-commerce Admin",
      description: "Backend management system for product inventory and order processing.",
      live: "https://rajchlothzy.vercel.app/admin",
      image: "/ecommerceAdmin.png",
      tags: ["Nodejs", "JWT", "MongoDB", "Tailwind", "React"]
    },
    {
      title: "Leaderboard App",
      description: "Real-time ranking system with dynamic point allocation and user tracking.",
      live: "https://real-time-leaderboard-app.vercel.app",
      image: "/leaderboard.png",
      tags: ["React", "Node.js", "WebSockets"]
    },
    {
      title: "University Website",
      description: "Informational portal for School of Engineering with program details and faculty information.",
      live: "https://soe-jnu.vercel.app/",
      image: "/soe-jnu.png",
      tags: ["Reactjs", "Tailwind", "Vercel"]
    },
    {
      title: "Login Auth System",
      description: "Secure role-based authentication with admin privileges and user management.",
      live: "https://login-auth-orpin.vercel.app/",
      image: "/login_auth.png",
      tags: ["Nodejs", "React", "JWT", "Expressjs"]
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my skills through real-world applications and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
    >
      {/* Image with gradient overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          loading="lazy"
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-blue-500/80 text-white text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <img src={WebsiteIcom} alt="Live Demo" className="w-5 h-5" />
            <span>View Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
