

const Missionvision = () => {
    return (
        <section className="relative w-full font-sans">
            
            {/* --- Header Overlay Section --- */}
            <div className="absolute top-0 left-0 w-full py-16 text-center z-10 px-4">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wide ">
                    Mission & Vision
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    Our Objectives & Future Direction
                </h2>
            </div>

            {/* --- 50/50 Split Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
                
                {/* === Left Column (Mission) === */}
                <div className="bg-navy-dark pt-48 pb-20 px-8 md:px-16 lg:pr-28 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-8">
                       Our Vision
                    </h3>
                    
                    <div className="space-y-6 text-white/90 text-lg leading-relaxed font-normal">
                        
                       
                        <p>
                           "To become a trusted global ecosystem partner connecting technology, manufacturing, education, and talent to create sustainable growth and international opportunities."
                        </p>
                    </div>
                </div>

                {/* === Right Column (Vision) === */}
                <div className="bg-primary pt-48 pb-20 px-8 md:px-16 lg:pl-28 flex flex-col justify-center text-white">
                    <h3 className="text-3xl font-bold mb-8">
                        Mission
                    </h3>

                    <div className="space-y-6 text-white/90 text-lg leading-relaxed font-normal">
                        
                      
                        <p>
                            "To connect global partners, businesses, institutions, and talent through innovative IT solutions, manufacturing partnerships, education pathways, and workforce solutions that accelerate growth and create lasting value."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Missionvision;
