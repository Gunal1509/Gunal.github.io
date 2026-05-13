import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Trophy, FileBadge } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: "education",
    title: "B.Tech in Information Technology",
    org: "Sri Manakula Vinayagar Engineering College",
    date: "2023 - 2027",
    score: "CGPA: 8.84",
    icon: <GraduationCap size={24} />
  },
  {
    type: "education",
    title: "12th HSC Board",
    org: "Vivekanandha Higher Secondary School",
    date: "2023",
    score: "92.33%",
    icon: <GraduationCap size={24} />
  },
  {
    type: "achievement",
    title: "First Prize - 'Kill The Manual' Hackathon",
    org: "Participated in 6+ hackathons total.",
    date: "Recent",
    score: "Winner",
    icon: <Trophy size={24} />
  },
  {
    type: "certification",
    title: "FullStack Development (Udemy) & Python for DS (NPTEL)",
    org: "Continuous Learning",
    date: "Ongoing",
    score: "Certified",
    icon: <FileBadge size={24} />
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom center",
              scrub: 1,
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-100 tracking-wide mb-2">Experience & Education</h2>
          <p className="text-sky-200 font-medium">My Academic and Professional Journey</p>
        </div>

        <div className="relative border-l-2 border-dashed border-sky-200/50 ml-4 md:ml-0 md:border-none">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={`mb-12 relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Waypoint on mobile */}
              <div className="absolute left-[-21px] md:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-sky-600 border-2 border-sky-100">
                {exp.icon}
              </div>

              {/* Desktop center line & icon */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white items-center justify-center shadow-lg text-sky-600 border-4 border-sky-100 z-10">
                {exp.icon}
              </div>

              <div className={`w-full pl-8 md:pl-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                <div className="glass-panel-light p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="inline-block px-3 py-1 bg-sky-800 text-white text-xs font-bold rounded-full mb-3 shadow-sm border border-sky-600">
                    {exp.date}
                  </div>
                  <h3 className="text-xl font-bold text-sky-100 mb-1">{exp.title}</h3>
                  <h4 className="text-sm font-semibold text-sky-200 mb-3">{exp.org}</h4>
                  <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${exp.type === 'achievement' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 'bg-green-100 text-green-700 border border-green-300'}`}>
                    {exp.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
