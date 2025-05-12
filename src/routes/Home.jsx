
import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Intro = lazy(() => import("../components/Intro"));
const Faq = lazy(() => import("../components/Faq"));
const Footer = lazy(() => import("../components/Footer"));
const Service = lazy(() => import("../components/Service"));
const AboutPage = lazy(() => import("../components/AboutPage"));
const ProjectPanel = lazy(() => import("../components/ProjectPanel"));
const SkillPanel = lazy(() => import("../components/SkillPanel"));

function Home() {
  document.title = "Rajkumar_yogi_portfolio";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navbar />
        <Intro />
        <Service />
        <section id="about">
          <AboutPage />
        </section>
        <section id="projects">
          <ProjectPanel />
        </section>
        <section id="skills">
          <SkillPanel />
        </section>
        {/* <Subscribe /> */}
        <Faq />
        <section id="contacts">
          <Footer />
        </section>
      </div>
    </Suspense>
  );
}

export default Home;
