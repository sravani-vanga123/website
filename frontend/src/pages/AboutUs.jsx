// src/pages/AboutUs.jsx

import React from "react";
import SEO from "../components/SEO/SEO";
import AboutImage from "../assets/About2.png";

import Missionvision from "../components/About/Missionvision";
import WhyMoin from "../components/About/WhyMoin";
import OurStory from "../components/About/Approach";

import AboutConsultancy from "../components/About/AboutConsultancy";
import Ourcore from "../components/About/Ourcore";
import OurTeam from "../components/About/OurTeam";
// import Benefits from "../components/About/Benefits";
// import Businesschanger from "../components/About/Businesschanger";

const AboutUs = () => {
  return (
    <div>
      {/* =====================================================
          SEO
      ====================================================== */}
      <SEO
        title="About Moin Consultancy - Our Journey & Vision"
        description="Learn about Moin Consultancy, our journey, vision, and commitment to creating meaningful opportunities through professional consultancy services."
        keywords="About Moin Consultancy, Moin Consultancy Story, Consultancy Services, Mission Vision, Business Consultancy, IT Solutions, Education, Recruitment"
        url="/about"
        image={AboutImage}
        siteName="Moin Consultancy"
        type="profile"
      />

      {/* =====================================================
          ABOUT CONSULTANCY
      ====================================================== */}
      <AboutConsultancy />

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <Missionvision />

      {/* =====================================================
          OUR STORY / APPROACH
      ====================================================== */}
      <OurStory />

      {/* =====================================================
          WHY MOIN CONSULTANCY
      ====================================================== */}
      <WhyMoin />

      {/* =====================================================
          OUR TEAM
      ====================================================== */}
      <OurTeam />

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      {/* <Benefits /> */}

      {/* =====================================================
          OUR CORE AREAS
      ====================================================== */}
      <Ourcore />

      {/* =====================================================
          BUSINESS CHANGER
      ====================================================== */}
      {/* <Businesschanger /> */}
    </div>
  );
};

export default AboutUs;