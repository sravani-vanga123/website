import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career1.png";
import SEO from "../../../components/SEO/SEO";
import {
  Search, ClipboardCheck, Compass, Map, TrendingUp, Route,
  UserCheck, BriefcaseBusiness, GraduationCap, Globe2, Target,
  ArrowRight, CheckCircle2, Sparkles,
} from "lucide-react";

const careerProcess = [
  { icon: Search, title: "Discover", description: "Understand your interests, strengths, skills, and aspirations." },
  { icon: ClipboardCheck, title: "Assess", description: "Evaluate your academic background, capabilities, and career potential." },
  { icon: Compass, title: "Explore", description: "Identify suitable career fields, courses, universities, and industry opportunities." },
  { icon: Route, title: "Strategise", description: "Develop a personalised education and career roadmap." },
  { icon: Map, title: "Prepare", description: "Build the skills, knowledge, and professional profile required for your chosen pathway." },
  { icon: TrendingUp, title: "Progress", description: "Support you as you move toward higher education, employment, or global career opportunities." },
];

const guidanceAreas = [
  "Career & Course Selection", "Stream & Specialisation Guidance",
  "Higher Education Planning", "University & Programme Selection",
  "Study Abroad Guidance", "Career Transition Planning",
  "Skill & Industry-Oriented Career Planning", "Professional Development",
];

const whyMoin = [
  { icon: UserCheck, title: "Personalised Guidance", description: "Every career journey is different." },
  { icon: BriefcaseBusiness, title: "Industry-Oriented Perspective", description: "We consider evolving industry requirements and emerging career opportunities." },
  { icon: GraduationCap, title: "Education + Career Alignment", description: "We connect your academic choices with practical career objectives." },
  { icon: Globe2, title: "Global Opportunities", description: "Where relevant, we help you explore international education and career pathways." },
  { icon: Target, title: "Long-Term Approach", description: "Our focus is not just on your next decision, but on building a sustainable career direction." },
];

// 1 Big Left Arrow + 2-3 Right Small Triangles
const LeftBigArrow = () => (
  <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden md:block">
    <svg width="180" height="380" viewBox="0 0 180 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.18]">
      {/* Your exact image shape - Rounded Left Play Button */}
      <path d="M 0 190 C 0 130 40 110 85 30 L 180 0 L 180 380 L 85 350 C 40 270 0 250 0 190 Z" fill="#C8E9DE" />
    </svg>
  </div>
);

const RightTriangles = ({ count = 3 }) => (
  <div className="absolute right-[15px] md:right-[25px] top-1/2 -translate-y-1/2 flex items-center gap-[6px] pointer-events-none z-10">
    {count >= 1 && <div className="w-0 h-0 border-t-[16px] border-b-[16px] border-l-[24px] border-t-transparent border-b-transparent border-l-[#E6F7F1] md:border-t-[20px] md:border-b-[20px] md:border-l-[32px]"></div>}
    {count >= 2 && <div className="w-0 h-0 border-t-[16px] border-b-[16px] border-l-[24px] border-t-transparent border-b-transparent border-l-[#8ED7B8] md:border-t-[20px] md:border-b-[20px] md:border-l-[32px]"></div>}
    {count >= 3 && <div className="w-0 h-0 border-t-[16px] border-b-[16px] border-l-[24px] border-t-transparent border-b-transparent border-l-[#00B67A] md:border-t-[20px] md:border-b-[20px] md:border-l-[32px]"></div>}
  </div>
);

const CareerCounselling = () => {
  return (
    <div className="font-sans text-[#25252B] bg-[#F5F3FF] min-h-screen overflow-hidden">
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-float{animation:float 4s ease-in-out infinite}`}</style>
      <SEO title="Career Counselling Services - Moin Consultancy" url="/services/education/careercounselling" />

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-full inline-flex px-6 py-2 shadow-sm">
          <ul className="flex gap-2 text-sm text-[#A202F0]"><li><Link to="/">Home</Link></li><li>/</li><li>Services</li><li>/</li><li className="font-semibold">Career Counselling</li></ul>
        </div>
      </div>

      {/* HERO */}
      <section className="relative container mx-auto bg-white rounded-[32px] md:rounded-[36px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] mx-2 md:mx-auto mb-8 overflow-hidden border border-gray-100">
        <div className="absolute top-0 right-0 w-[140px] h-[140px] z-20 overflow-hidden rounded-tr-[36px] pointer-events-none">
          <div className="absolute top-[32px] right-[-42px] w-[220px] h-[22px] bg-[#A020F0] rotate-[40deg]"></div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center px-6 md:px-10 py-12 md:py-16 z-10">
          <div className="w-full md:w-[52%] space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#F5F0FF] rounded-full px-4 py-1.5 text-[13px] font-semibold text-[#A020F0]"><Sparkles size={14} /> Trusted Career Experts</div>
            <h3 className="text-[32px] md:text-[42px] font-extrabold leading-[1.1]"><span className="text-[#A020F0]">Clarity for Your Career.</span><span className="block text-[#1A1A1A]">Confidence for Your Future</span></h3>
            <div className="w-16 h-1.5 bg-[#A020F0] rounded-full"></div>
            <p className="text-[15px] text-gray-600 leading-relaxed">At Moin Consultancy, we help students, graduates, and working professionals make informed career decisions based on their strengths and aspirations.</p>
          </div>
          <div className="w-full md:w-[48%] flex justify-center"><div className="rounded-[22px] overflow-hidden border-[5px] border-white shadow-[0_20px_60px_rgba(162,32,240,0.25)]"><img src={image} alt="Career" className="w-full max-w-[480px]" /></div></div>
        </div>
      </section>

      {/* 2ND SECTION - LEFT 1 BIG ARROW + RIGHT 2-3 SMALL TRIANGLES */}
      <section className="relative bg-[#EDE9FF]/60 py-20 md:py-24 rounded-[32px] md:rounded-[40px] mx-2 md:mx-4 my-8 overflow-hidden">

        {/* LEFT - 1 BIG SECTION (Your Image) */}
        <LeftBigArrow />

        {/* RIGHT - 2-3 SMALL TRIANGLES */}
        <RightTriangles count={3} />

        {/* Extra light left glow */}
        <div className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#C8E9DE]/20 rounded-full blur-[30px] pointer-events-none hidden md:block"></div>

        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block bg-white rounded-full px-5 py-1.5 text-xs font-bold tracking-widest text-[#A020F0] shadow-sm">OUR PROCESS</span>
            <h3 className="text-3xl md:text-[36px] font-bold text-[#A020F0] mt-3">Our Career Counselling Process</h3>
            <div className="w-16 h-1.5 bg-[#A020F0] rounded-full mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600">A structured approach designed to help you understand your strengths and build a clear career path.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto md:px-10">
            {careerProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group relative bg-white rounded-[20px] shadow-sm border-t-4 border-[#A020F0] p-7 min-h-[260px] flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-[60px] h-[60px] overflow-hidden rounded-tr-[20px]"><div className="absolute top-[8px] right-[-18px] w-[90px] h-[14px] bg-[#A020F0]/10 rotate-45"></div></div>
                  <div className="w-14 h-14 rounded-full bg-[#A020F0]/10 flex items-center justify-center mb-4 group-hover:bg-[#A020F0] transition-all"><Icon size={26} className="text-[#A020F0] group-hover:text-white" /></div>
                  <h3 className="text-lg font-bold text-[#A020F0] mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-[14px]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3RD SECTION - RIGHT 2 TRIANGLES */}
      <section className="relative bg-white py-16 rounded-[32px] md:rounded-[40px] mx-2 md:mx-4 my-8 shadow-sm border border-gray-100 overflow-hidden">
        <RightTriangles count={2} />
        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="text-center mb-10"><h3 className="text-3xl font-bold text-[#A020F0]">Our Career Guidance Covers</h3><div className="w-16 h-1.5 bg-[#A020F0] rounded-full mx-auto mt-4"></div></div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:px-10">
            {guidanceAreas.map((r, i) => (
              <div key={i} className="bg-[#F8F6FF] p-4 rounded-[14px] flex items-center gap-3 border-l-4 border-transparent hover:border-[#A020F0] transition-all">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center"><CheckCircle2 size={18} className="text-[#A020F0]" /></div>
                <p className="font-medium text-gray-700 text-[14px]">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4TH SECTION - RIGHT 3 TRIANGLES */}
      <section className="relative bg-[#EDE9FF]/60 py-20 rounded-[32px] md:rounded-[40px] mx-2 md:mx-4 my-8 overflow-hidden">
        <RightTriangles count={3} />
        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="text-center mb-12"><h3 className="text-3xl font-bold text-[#A020F0]">Why Moin Consultancy?</h3><div className="w-16 h-1.5 bg-[#A020F0] rounded-full mx-auto mt-4"></div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto md:px-10">
            {whyMoin.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-[20px] shadow-sm border-t-4 border-[#A020F0] p-7 min-h-[240px] flex flex-col items-center text-center hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#A020F0]/10 flex items-center justify-center mb-4"><Icon size={26} className="text-[#A020F0]" /></div>
                  <h3 className="text-lg font-bold text-[#A020F0] mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-[14px]">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#A020F0] text-white py-14 rounded-[28px] md:rounded-[32px] mx-2 md:mx-4 my-8 overflow-hidden">
        <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl md:text-[30px] font-bold">Ready to Plan Your Career?</h3>
          <Link to="/contact" className="bg-white text-[#A020F0] px-8 h-12 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-black hover:text-white transition-all">Talk to Our Team <ArrowRight size={18} /></Link>
        </div>
        <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex gap-[6px] opacity-40">
          <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[18px] border-l-white/40 border-t-transparent border-b-transparent"></div>
          <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[18px] border-l-white/70 border-t-transparent border-b-transparent"></div>
          <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[18px] border-l-white border-t-transparent border-b-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default CareerCounselling;