const Approach = () => {
  const storyImage = "https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Our+Story.jpeg";

  return (
    <section className="w-full py-20 px-6 bg-[#fdfdfd]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
         Our Global Partnership Approach
        </h2>
        <div className="h-1 w-16 bg-primary mt-4 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        
        {/* --- LEFT COLUMN: Single Image --- */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={storyImage} 
              alt="Our Story - Team collaboration" 
              className="w-full h-auto lg:h-full max-h-[650px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* --- RIGHT COLUMN: Text Content --- */}
        <div className="w-full lg:w-1/2 lg:pt-4">
          <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight relative inline-block">
      Partnership is at the heart of what we do
      <span className="block w-16 h-1 bg-[#A202F0] rounded-full mt-3"></span>
    </h3>
            <p>
             Moin Consultancy works toward building long-term relationships with organizations across different industries and international markets. Our partnership-driven approach enables us to bring together global expertise, local knowledge, technology, talent, and opportunities.
            </p>
            <p>
              We aim to create an ecosystem where businesses can access the right solutions, institutions can build meaningful collaborations, professionals can discover new opportunities, and students can develop pathways toward successful careers.
            </p>
            
          

            

          </div>
        </div>

      </div>
    </section>
  );
};

export default Approach;
