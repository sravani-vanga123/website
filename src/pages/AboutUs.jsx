// src/pages/AboutUs.jsx
import React from "react";
import SEO from "../components/SEO/SEO";

import Missionvision from "../components/About/Missionvision";
import WhyMoin from "../components/About/WhyMoin";
import OurStory from "../components/About/Approach";

import AboutConsultancy from "../components/About/AboutConsultancy";
import Ourcore from "../components/About/Ourcore";

// import OurTeam from "../components/About/OurTeam";
// import Benefits from "../components/About/Benefits";
// import Businesschanger from "../components/About/Businesschanger";

const AboutUs = () => {
  return (
    <div>
      {/* SEO */}
      <SEO
        title="About Moin Consultancy - Our Journey & Vision"
        description="Learn about Moin Consultancy, our journey, vision, and commitment to creating meaningful opportunities through professional consultancy services."
        keywords="About Moin Consultancy, Moin Consultancy Story, Consultancy Services, Mission Vision, Business Consultancy, IT Solutions, Education, Recruitment"
        url="/about"
        image="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Our+Story.jpeg"
        siteName="Moin Consultancy"
        type="profile"
      />

      {/* About Consultancy */}
      <AboutConsultancy />

      {/* Mission & Vision */}
      <Missionvision />

      {/* Our Story / Approach */}
      <OurStory />

      {/* Why Moin Consultancy */}
      <WhyMoin />

      {/* Our Team */}
      {/* <OurTeam /> */}

      {/* Benefits */}
      {/* <Benefits /> */}

      {/* Our Core Areas */}
      <Ourcore />

      {/* Business Changer */}
      {/* <Businesschanger /> */}
    </div>
  );
};

export default AboutUs;