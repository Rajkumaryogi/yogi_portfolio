import React, { useEffect, useRef, useState } from "react";
import { easeInOut, motion, useInView } from "framer-motion";
import "../components/styles/Service.css";
import WebsiteLogo from "../assets/website.png";
import Seo from "../assets/seo.png";
import Api from "../assets/api.png";
import Performance from "../assets/performance.png";
import Maintainance from "../assets/maintainance.png";
import AnimationLogo from "../assets/animation.png";

function Service() {
  const Services = [
    {
      title: "Custom Websites",
      description:
        "Responsive, high-performance websites tailored to meet your goals.",
      icon: WebsiteLogo,
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, user-friendly designs that leave a lasting impression.",
      icon: "https://themewagon.github.io/satner/img/services/s2.png",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost visibility and attract more traffic with expert SEO strategies.",
      icon: Seo,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Scalable online stores with secure payments and seamless experiences.",
      icon: "https://themewagon.github.io/satner/img/services/s4.png",
    },
    {
      title: "Maintenance & Hosting",
      description: "Keep your site secure, fast, and always up-to-date.",
      icon: Maintainance,
    },
    {
      title: "Performance Optimization",
      description:
        "Boostyour website speed and performance for a better user experience.",
      icon: Performance,
    },
    {
      title: "API Integration & Development",
      description:
        "Integrate or build APIs to extend your website's capabilities.",
      icon: Api,
    },
    {
      title: "Web Animations",
      description:
        "Bring your website to life with captivating, interactive animations.",
      icon: AnimationLogo,
    },
  ];

  // State to check screen size
  // const [isWebView, setIsWebView] = useState(false);

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsWebView(window.innerWidth >= 768); // Set web view for screens >= 768px
  //   };

  //   // Check screen size on load and on resize
  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);

  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  return (
    <div className="bg-white flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-[150px] pt-24 pb-16">
      <h1 className="font-bold text-black text-4xl md:text-6xl text-center">
        Services I Offer
      </h1>
      <p className="text-center text-textBlackColor mt-4 max-w-3xl">
        I help businesses and individuals bring their ideas to life with
        professional, custom-built web solutions tailored to meet your goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 justify-center mx-auto ">
        {Services.map((item, index) => (
          <ServiceCard key={index} service={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Service;

// ServiceCard Component with Staggered Transition
const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true });
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenViewed(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={hasBeenViewed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: easeInOut }}
      className="flex flex-col items-center border-2 border-gray-600 shadow-lg w-full max-w-sm px-6 py-4 min-h-[20rem] rounded-2xl bg-blue-500 text-center service-bounce"
    >
      <img
        loading="lazy"
        src={service.icon}
        alt={service.title}
        className="py-4 max-w-[80px] max-h-[100px] object-contain"
      />
      <h5 className="font-extrabold text-2xl mt-2 mb-1 flex justify-center items-center h-[4rem] text-textThemeColor">
        {service.title}
      </h5>
      <p className="text-base text-textWhiteColor mt-2">
        {service.description}
      </p>
    </motion.div>
  );
};
