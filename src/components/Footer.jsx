import React from "react";
import GithubIcon from "../assets/github.svg";
import InstaIcon from "../assets/instagram.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";

function Footer() {
  return (
    <div className="bg-white text-textBlackColor w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left Side - Contact Information */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">
              Contact Me
            </h1>
            <p className="text-lg sm:text-xl text-center lg:text-left">
              Have a <span className="text-blue-500">Project in mind?</span>
              <br className="hidden sm:block" />
              We'd love to hear from you! Reach out to us, and let's turn your{" "}
              <span className="text-blue-500">Ideas into Reality.</span>
            </p>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-center lg:text-left">
                <span className="text-blue-500 font-medium">Email:</span>{" "}
                <a
                  href="mailto:rajkumar6777y@gmail.com"
                  className="text-base sm:text-lg cursor-pointer hover:underline"
                >
                  rajkum51_soe@jnu.ac.in
                </a>
                <br />
                <a
                  href="mailto:rajkumar6777y@gmail.com"
                  className="text-base sm:text-lg cursor-pointer hover:underline"
                >
                  rajkumar6777y@gmail.com
                </a>
              </p>
              <p className="text-center lg:text-left text-base sm:text-lg">
                <span className="text-blue-500 font-medium">Whatsapp:</span>{" "}
                +91-9785641782
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-6 bg-black py-3 px-6 rounded-lg max-w-md mx-auto lg:mx-0">
              <a
                href="https://github.com/Rajkumaryogi"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="GitHub"
              >
                <img src={GithubIcon} loading="lazy" alt="Github" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajkumaryogi-jnu/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <img src={LinkedinIcon} loading="lazy" alt="Linkedin" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/rajkumar6777y"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <img src={XIcon} alt="Twitter" loading="lazy" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/raj__yogii/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <img src={InstaIcon} alt="Instagram" loading="lazy" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">
              Send Message
            </h2>
            <form className="space-y-3 sm:space-y-4">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-2 sm:p-3 bg-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 sm:p-3 bg-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              {/* Message */}
              <textarea
                placeholder="Type Your Message..."
                rows="4"
                className="w-full p-2 sm:p-3 bg-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 sm:py-3 hover:bg-blue-600 transition duration-300 rounded-lg text-sm sm:text-base font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;