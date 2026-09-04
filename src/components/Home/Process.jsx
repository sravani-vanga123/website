import React from 'react';
import { CheckCircle } from 'lucide-react'; // Using lucide-react for the checkmark icon

// --- Helper Component: ProcessCard ---
const ProcessCard = ({ title, description }) => (
  // Updated: Replaced 'border-indigo-500' with 'border-primary'
  // bg-white kept as per rules
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center border-t-4 border-primary">
    {/* Checkmark Icon */}
    {/* Updated: Replaced 'text-indigo-500' with 'text-primary' */}
    <CheckCircle className="w-8 h-8 text-primary mb-4" /> 
    
    <h3 className="text-xl font-semibold text-black mb-3">
      {title}
    </h3>
    <p className="text-gray-dark leading-relaxed">
      {description}
    </p>
  </div>
);


// --- Main Component: ProcessSection ---
function ProcessSection() {
  const processSteps = [
 
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand Your Goals",
    description:
      "We begin by understanding your aspirations, challenges, requirements, and long-term objectives.",
  },
  {
    number: "02",
    title: "Analyse",
    subtitle: "Identify the Right Opportunities",
    description:
      "We assess your needs, strengths, market landscape, and available opportunities to develop the right direction.",
  },
  {
    number: "03",
    title: "Strategise",
    subtitle: "Build a Clear Roadmap",
    description:
      "Our experts develop a focused strategy aligned with your goals, industry requirements, and future opportunities.",
  },
  {
    number: "04",
    title: "Connect",
    subtitle: "Access the Right Network",
    description:
      "Through our global and industry-oriented partnerships, we connect you with relevant universities, businesses, technology providers, industry partners, and talent networks.",
  },
  {
    number: "05",
    title: "Execute",
    subtitle: "Turn Strategy into Action",
    description:
      "We provide end-to-end support to implement the selected solution, pathway, or opportunity with professionalism and precision.",
  },
  {
    number: "06",
    title: "Grow",
    subtitle: "Create Long-Term Value",
    description:
      "Our relationship continues beyond implementation. We focus on sustainable growth, continuous improvement, and long-term success.",
  },
];

  return (
    // bg-gray-50 mapped to bg-gray-light
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-extrabold text-black tracking-tight">
            Our Process
          </h2>
          {/* Updated: Replaced 'bg-indigo-500' with 'bg-primary' */}
          <div className="h-1 w-16 bg-primary mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-dark">
            Six Steps to Achieving Your Vision
          </p>
        <p className="mt-4 text-lg text-gray-dark">
            
          At Moin Consultancy, we transform aspirations and business requirements into clear, actionable pathways. Our structured approach combines expert guidance, industry insights, global partnerships, and personalised solutions to create meaningful outcomes.
</p>
        </div>

        {/* The 2x3 Grid of Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard 
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;