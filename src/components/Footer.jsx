import React from "react";
import GithubIcon from "../assets/github.svg";
import InstaIcon from "../assets/instagram.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import XIcon from "../assets/x.svg";
function Footer() {
  return (
    <div className="bg-white text-textBlackColor flex justify-center">
      <div className="px-[1rem] sm:px-[150px] py-12 flex flex-col md:flex-row gap-40">
        {/* Left Side - Contact Information */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold sm:text-start text-center">Contact Me</h1>
          <p className="text-xl sm:text-start text-center">
            Have a <span className="text-blue-500 sm:text-start text-center">Project in mind?</span>
            <br />
            We’d love to hear from you! Reach out to us, and let's turn your{" "}
            <span className="text-blue-500 sm:text-start text-center">Ideas into Reality.</span>
          </p>
          <div>
            <p className="sm:text-start text-center my-2">
              <span className="text-blue-500 font-medium">Email:</span>{" "}
              <a
                href="mailto:rajkumar6777y@gmail.com"
                className="text-xl cursor-pointer"
              >
                rajkum51_soe@jnu.ac.in
                rajkumar6777y@gmail.com 
              </a>
            </p>
            <p className="sm:text-start text-center text-xl">
              <span className="text-blue-500 text-xl font-medium">Whatsapp:</span>{" "}
              +91-9785641782
            </p>
          </div>
          {/* icons   */}
          <div className="flex items-center justify-center sm:justify gap-8 bg-black py-4 rounded-lg ">
            <a
              href="https://github.com/Rajkumaryogi"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} loading="lazy" alt="Github" className="w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajkumaryogi-jnu/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} loading="lazy" alt="Linkedin" className="w-6" />
            </a>
            <a href="https://x.com/rajkumar6777y" target="_blank" rel="noreferrer">
              <img src={XIcon} alt="Twitter" loading="lazy" className="w-6" />
            </a>
            <a
              href="https://www.instagram.com/raj__yogii/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstaIcon} alt="Instagram" loading="lazy" className="w-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center xl:text-start">Send Message</h2>
          <form className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 bg-black rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 bg-black rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* Message */}
            <textarea
              placeholder="Type Your Message..."
              rows="4"
              className="w-full p-3 bg-black rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 hover:bg-blue-700 transition duration-300 rounded-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
