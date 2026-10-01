import React from "react";
import moinImage from "../../assets/moin.png";

const AboutConsultancy = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-5 md:px-10 overflow-hidden">

      {/* =========================
          SECTION HEADING
      ========================= */}
      <div className="text-center mb-14">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
          About Moin Consultancy
        </h2>

        <div className="h-1 w-16 mt-4 bg-primary mx-auto rounded-full"></div>

      </div>


      {/* =========================
          MAIN SECTION
      ========================= */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">


        {/* =====================================================
            LEFT SIDE - EXACT CIRCLE + BLUE U SHAPE
        ===================================================== */}
        <div className="w-full lg:w-1/2 flex justify-center">

          <div className="relative w-[520px] h-[500px] flex justify-center items-start">


            {/* ==========================================
                BLUE U / SEMI-CIRCLE
            ========================================== */}
            <div
              className="
                absolute
                top-[180px]
                left-1/2
                -translate-x-1/2

                w-[500px]
                h-[285px]

                bg-primary

                rounded-b-full

                z-0
              "
            ></div>


            {/* ==========================================
                WHITE INNER BORDER
            ========================================== */}
            <div
              className="
                absolute
                top-[175px]
                left-1/2
                -translate-x-1/2

                w-[420px]
                h-[245px]

                border-b-[5px]
                border-white

                rounded-b-full

                z-[1]
              "
            ></div>


            {/* ==========================================
                IMAGE CIRCLE
            ========================================== */}
            <div
              className="
                relative
                z-10

                w-[420px]
                h-[420px]

                rounded-full
                overflow-hidden

                border-4
                border-white

                shadow-[0_5px_20px_rgba(0,0,0,0.12)]

                bg-white
              "
            >

              <img
                src={moinImage}
                alt="Moin Consultancy"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE - CONTENT
        ===================================================== */}
        <div className="w-full lg:w-1/2">

         

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-7">
            Connecting Global Expertise with New Possibilities
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mb-7"></div>


          <p className="text-gray-600 text-lg leading-8 mb-6">
            Moin Consultancy is a global consulting and solutions company
            dedicated to connecting people, businesses, institutions, and
            industries with the right expertise, opportunities, technology,
            and talent.
          </p>


          <p className="text-gray-600 text-lg leading-8 mb-6">
            We believe that meaningful growth begins with the right
            connection. Through our growing network of global industry
            partners, technology providers, educational institutions,
            manufacturers, and professional networks, we create opportunities
            that enable individuals and organizations to move forward with
            confidence.
          </p>


          <p className="text-gray-600 text-lg leading-8">
            Our approach combines industry knowledge, technology, education,
            talent, and strategic partnerships to deliver solutions that are
            relevant to today's rapidly evolving global economy.
          </p>

        </div>

      </div>

    </section>
  );
};

export default AboutConsultancy;