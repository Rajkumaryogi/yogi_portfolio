import React from "react";
import { motion } from "framer-motion";
import WebsiteIcom from "../assets/website.svg";
import { useDarkMode } from "../context/DarkModeContext";

function ProjectPanel() {
  const { darkMode } = useDarkMode();
  const Projects = [
  {
    title: "Dharti International",
    description:
      "A full-stack platform promoting community engagement and environmental awareness, allowing users to explore nature-based activities, connect with like-minded individuals, and participate in eco-friendly initiatives.",
    live: "https://dif-web-mu.vercel.app",
    image: "/dif_team.png",
    tags: ["Node.js", "MongoDB", "EJS", "Bootstrap CSS"]
  },
  {
    title: "DIF Admin Panel",
    description:
      "Secure admin dashboard with database integration for content management, event updates, and user administration with authentication.",
    live: "https://dif-web-mu.vercel.app/admin/login",
    image: "/dif_admin.png",
    tags: ["Node.js", "EJS", "Bootstrap CSS", "JWT"]
  },
  {
    title: "Bajdoliya Workshop",
    description:
      "Car service booking platform where users can register vehicles, schedule services, and receive real-time status updates.",
    live: "https://bajdoliyaworkshop.vercel.app",
    image: "/workshop.png",
    tags: ["Node.js", "React.js", "Tailwind CSS", "JWT"]
  },
  {
    title: "Bajdoliya Workshop Admin",
    description:
      "Admin dashboard for managing car service requests, booking statuses, and user administration with database connectivity.",
    live: "https://bajdoliyaworkshop.vercel.app/admin",
    image: "/workshop_admin.png",
    tags: ["Node.js", "React.js", "Tailwind CSS", "JWT"]
  },
  {
    title: "E-commerce Website",
    description:
      "Full-featured online store with product catalog, shopping cart, order management, and secure payment gateway integration.",
    live: "https://rajchlothzy.vercel.app",
    image: "/ecommerce.png",
    tags: ["Node.js", "React.js", "MongoDB", "Railway"]
  },
  {
    title: "E-commerce Admin",
    description:
      "Backend management system for handling product inventory, orders, and user roles with secure authentication.",
    live: "https://rajchlothzy.vercel.app/admin",
    image: "/ecommerceAdmin.png",
    tags: ["Node.js", "React.js", "JWT", "MongoDB", "Tailwind CSS"]
  },
  {
    title: "Leaderboard App",
    description:
      "Real-time leaderboard application with dynamic point allocation, user tracking, and instant WebSocket updates.",
    live: "https://real-time-leaderboard-app.vercel.app",
    image: "/leaderboard.png",
    tags: ["React.js", "Node.js", "WebSockets"]
  },
  {
    title: "University Website",
    description:
      "Informational portal for the School of Engineering at JNU, featuring program details, faculty profiles, and responsive design.",
    live: "https://soe-jnu.vercel.app",
    image: "/soe-jnu.png",
    tags: ["React.js", "Tailwind CSS", "Vercel"]
  },
  {
    title: "Login Auth System",
    description:
      "Secure authentication system with role-based access, profile management, and product administration features.",
    live: "https://login-auth-orpin.vercel.app",
    image: "/login_auth.png",
    tags: ["Node.js", "React.js", "Express.js", "JWT"]
  }
];


  return (
    <section className={`w-full bg-gradient-to-b ${darkMode ? 'from-gray-900 to-gray-800' : 'from-white to-blue-50'} py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
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
              <ProjectCard project={project} darkMode={darkMode} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, darkMode }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border`}
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
              <span 
                key={i} 
                className={`${darkMode ? 'bg-blue-600/90' : 'bg-blue-500/80'} text-white text-xs px-2 py-1 rounded`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
          {project.title}
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 flex-grow`}>
          {project.description}
        </p>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <img 
              src={WebsiteIcom} 
              alt="Live Demo" 
              className="w-5 h-5" 
              style={{ filter: darkMode ? 'invert(1)' : 'none' }} 
            />
            <span>View Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;