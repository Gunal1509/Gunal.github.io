import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gauge, Activity, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "FRONTEND_SYS",
    skills: ["HTML", "CSS", "ReactJS", "Bootstrap"],
  },
  {
    title: "BACKEND_DB_SYS",
    skills: ["NodeJS", "FastAPI", "Firebase", "SQL"],
  },
  {
    title: "CORE_LANG_SYS",
    skills: ["Python", "C++", "JavaScript"],
  },
];

const achievements = [
  { platform: "LEETCODE", stat: "90+", handle: "Gunal_15", link: "https://leetcode.com/u/Gunal_15/" },
  { platform: "CODEFORCES", stat: "20+", handle: "Gunal_S15", link: "https://codeforces.com/profile/Gunal_S15" },
  { platform: "SKILLRACK", stat: "50+", handle: "Problems", link: "" },
];

const Skills = () => {
  const dashboardRef = useRef(null);
  const metersRef = useRef([]);

  useEffect(() => {
    // Reveal Dashboard
    gsap.fromTo(dashboardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: dashboardRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        }
      }
    );

    // Animate Meters
    metersRef.current.forEach((meter, i) => {
      if (meter) {
        gsap.fromTo(meter,
          { strokeDashoffset: 300 },
          {
            strokeDashoffset: 0,
            scrollTrigger: {
              trigger: dashboardRef.current,
              start: "top 60%",
              end: "center center",
              scrub: 1,
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="skills" className="py-32 relative z-10 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6">
        
        <div ref={dashboardRef} className="dashboard-panel p-8 md:p-12 max-w-5xl mx-auto border border-sky-500/30 bg-sky-950/40 rounded-sm relative shadow-[0_0_30px_rgba(14,165,233,0.1)]">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400"></div>

          <div className="border-b border-sky-500/30 pb-4 mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-light tracking-widest flex items-center gap-3 text-white uppercase">
              <Cpu size={24} className="text-sky-400" /> Skills
            </h2>
            <div className="text-xs font-mono text-sky-400 animate-pulse tracking-widest">SYS_ONLINE</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="border border-sky-500/20 bg-sky-900/20 p-6 rounded-sm">
                <h3 className="text-xs font-mono tracking-widest mb-4 text-sky-400/80 border-b border-sky-500/20 pb-2">
                  // {category.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex justify-between items-center font-sans text-sky-100 font-light">
                      <span>{skill}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_5px_#38bdf8]"></span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Performance Gauges */}
          <h3 className="text-xs font-mono tracking-widest mb-6 flex items-center gap-2 text-sky-400/80 uppercase">
            <Activity size={16} /> COMPETITIVE PROGRAMMING
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center border border-sky-500/20 bg-sky-900/20 py-8 rounded-sm relative overflow-hidden group">
                {/* Background scanning effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-400/5 to-transparent h-[200%] -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-linear"></div>
                
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                  <Gauge size={60} className="absolute text-sky-900/50" strokeWidth={1} />
                  {/* Fake SVG Gauge fill */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="48" cy="48" r="40" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="250" strokeDashoffset="250" strokeLinecap="round" ref={el => metersRef.current[index] = el} />
                  </svg>
                  <span className="absolute text-xl font-light text-white z-10">{item.stat}</span>
                </div>
                <div className="text-center font-sans">
                  <div className="text-xs font-mono text-sky-400/60 mb-2">{item.platform}</div>
                  <div className="text-sm font-light text-sky-200 mb-4">{item.handle}</div>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-block px-4 py-1.5 border border-sky-400/50 text-sky-300 text-xs font-mono rounded hover:bg-sky-400/20 hover:text-white transition-colors relative z-20"
                    >
                      VIEW PROFILE
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
