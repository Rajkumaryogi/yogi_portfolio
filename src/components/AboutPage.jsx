import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <section className="relative bg-white py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              src="https://i.pinimg.com/736x/09/6b/53/096b53da91d3e807d53419aea798376d.jpg"
              alt="Rajkumar Yogi"
              loading="lazy"
              className="w-full max-w-md h-auto rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl border-4 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left">
            About <span className="text-blue-600">Me</span>
          </h1>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              I’m <span className="font-semibold text-blue-600">Rajkumar Yogi</span>, a
              Computer Science Engineering student (B.Tech, graduating 2025) with a strong
              foundation in the <span className="font-semibold">MERN stack</span> and
              <span className="font-semibold"> Data Structures & Algorithms in Java</span>.
              I specialize in building high-performance, responsive web applications
              that combine clean code with intuitive UI/UX design.
            </p>

            <p>
              Beyond development, I have hands-on experience with{" "}
              <span className="font-semibold text-blue-600">AWS cloud services</span> such
              as EC2 for scalable hosting, S3 for object storage, EBS for block storage,
              Lambda for serverless execution, RDS for relational databases, DynamoDB for
              NoSQL, VPC for secure networking, CloudFront for content delivery, and Route
              53 for DNS management. I also deploy applications on platforms like{" "}
              <span className="font-semibold">Docker, Hostinger, Google Cloud, Railway, and Vercel</span>.
            </p>

            <p>
              My leadership as{" "}
              <span className="font-semibold text-blue-600">
                Battalion Havildar Major in NCC
              </span>{" "}
              has strengthened my ability to manage large teams and projects effectively.
              I’m passionate about problem-solving, scalable architecture, and delivering
              solutions that make a real impact.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <a
              href="https://docs.google.com/document/d/1y89-dms9A_yrdGTGdYxlhec5QoLTcgZS5zvrDhIDQ9s/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Get My CV →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
