import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// React Icons
import { FaGlobe, FaPaintBrush, FaSearch, FaShoppingCart, FaServer, FaRocket, FaPlug, FaMagic, FaAws, FaHeadset, FaLaptopCode, FaDatabase } from "react-icons/fa";

function Service() {
  const Services = [
    {
      title: "Custom Websites",
      description: "Responsive, high-performance websites tailored to meet your goals.",
      icon: <FaGlobe className="w-16 h-16" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      learnMoreLink: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that leave a lasting impression.",
      icon: <FaPaintBrush className="w-16 h-16" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      learnMoreLink: "https://www.interaction-design.org/literature/topics/ui-design"
    },
    {
      title: "SEO Optimization",
      description: "Boost visibility and attract more traffic with expert SEO strategies.",
      icon: <FaSearch className="w-16 h-16" />,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      learnMoreLink: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
    },
    {
      title: "E-commerce Solutions",
      description: "Scalable online stores with secure payments and seamless experiences.",
      icon: <FaShoppingCart className="w-16 h-16" />,
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      learnMoreLink: "https://www.shopify.com/blog/ecommerce-website-development"
    },
    {
      title: "Maintenance & Hosting",
      description: "Keep your site secure, fast, and always up-to-date.",
      icon: <FaServer className="w-16 h-16" />,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      learnMoreLink: "https://www.website.com/?source=SC&country=IN"
    },
    {
      title: "Performance Optimization",
      description: "Boost your website speed and performance for better user experience.",
      icon: <FaRocket className="w-16 h-16" />,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      learnMoreLink: "https://web.dev/learn/#performance"
    },
    {
      title: "API Integration",
      description: "Integrate or build APIs to extend your website's capabilities.",
      icon: <FaPlug className="w-16 h-16" />,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      learnMoreLink: "https://developer.mozilla.org/en-US/docs/Web/API"
    },
    {
      title: "Web Animations",
      description: "Bring your website to life with captivating animations.",
      icon: <FaMagic className="w-16 h-16" />,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      learnMoreLink: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"
    },
    {
      title: "AWS Cloud Services",
      description: "Scalable, secure, and cost-efficient AWS cloud infrastructure setup and management.",
      icon: <FaAws className="w-16 h-16" />,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      learnMoreLink: "https://aws.amazon.com/what-is-aws/"
    },
    {
      title: "IT Support & Services",
      description: "Reliable IT support, troubleshooting, and infrastructure maintenance.",
      icon: <FaHeadset className="w-16 h-16" />,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      learnMoreLink: "https://en.wikipedia.org/wiki/IT_service_management"
    },
    {
      title: "Software Solutions",
      description: "Custom software applications tailored to your business needs.",
      icon: <FaLaptopCode className="w-16 h-16" />,
      color: "bg-gradient-to-br from-slate-500 to-slate-600",
      learnMoreLink: "https://www.ibm.com/topics/software-development"
    },
    {
      title: "Database Management",
      description: "Efficient database design, optimization, and security management.",
      icon: <FaDatabase className="w-16 h-16" />,
      color: "bg-gradient-to-br from-lime-500 to-lime-600",
      learnMoreLink: "https://www.oracle.com/database/what-is-database/"
    }
  ];

  return (
    <section className="relative bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            I help businesses and individuals bring their ideas to life with professional, 
            custom-built web solutions tailored to meet your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Services.map((item, index) => (
            <ServiceCard key={index} service={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`${service.color} dark:bg-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-white h-full`}
    >
      <div className="bg-white/20 p-4 rounded-full mb-6">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
      <p className="text-white/90 text-center">{service.description}</p>
      
      <motion.a
        href={service.learnMoreLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
      >
        Learn more
      </motion.a>
    </motion.div>
  );
};

export default Service;
