import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ShieldCheck, Video, Cloud, Box, Activity, CalendarDays, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Secure Drug Authentication System",
    description: "Developed a role-based drug verification platform using invisible digital watermarking to prevent counterfeit medicines.",
    icon: <ShieldCheck size={32} className="text-sky-600" />,
    tech: ["Blockchain", "Solidity", "IPFS", "React"],
    github: "https://github.com/Gunal1509/counterfeit_detection",
    demo: "#",
    align: "left"
  },
  {
    title: "Campus Crowd Flow & Safety",
    description: "A fully serverless, cloud-native application on AWS that monitors crowd density at campus events in real-time.",
    icon: <Cloud size={32} className="text-sky-600" />,
    tech: ["AWS", "Serverless", "ML"],
    github: "https://github.com/Gunal1509/CAMPUS-EVENT-CROWD-FLOW-SAFETY-PREDICTION-SYSTEM",
    demo: "#",
    align: "right"
  },
  {
    title: "Digital Twin Inventory System",
    description: "A real-time AI-ready logistics digital twin that simulates warehouses, orders, inventory, and truck fleets.",
    icon: <Box size={32} className="text-sky-600" />,
    tech: ["React", "Node.js", "Firebase"],
    github: "https://github.com/Gunal1509/Digital_twin_inventory_system",
    demo: "#",
    align: "left"
  },
  {
    title: "Real-time Sentiment Classifier",
    description: "A complete Sentiment Analysis Web App featuring real-time sentiment prediction and animated dashboards.",
    icon: <Activity size={32} className="text-sky-600" />,
    tech: ["Python", "Flask", "ML"],
    github: "https://github.com/Gunal1509/Real-time-sentiment-classifier-and-training-",
    demo: "#",
    align: "right"
  },
  {
    title: "Offline Video Analyser & Narrator",
    description: "Offline Python-based system extracting frames and generating scene descriptions using deep learning image captioning.",
    icon: <Video size={32} className="text-sky-600" />,
    tech: ["Python", "Computer Vision", "TTS"],
    github: "https://github.com/Gunal1509/offline-video-analyser-and-narrator-for-blind",
    demo: "#",
    align: "left"
  },
  {
    title: "Habinet Habit Tracker",
    description: "A daily habit tracker with interactive heat map analytics built with simple TypeScript, React, and Vite.",
    icon: <CalendarDays size={32} className="text-sky-600" />,
    tech: ["TypeScript", "React", "Vite"],
    github: "https://github.com/Gunal1509/Habinet",
    demo: "#",
    align: "right"
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        const isLeft = projects[i].align === "left";
        gsap.fromTo(card,
          { opacity: 0, x: isLeft ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-sky-100 tracking-wide mb-2 flex items-center justify-center gap-3">
            <MapPin size={36} /> Projects
          </h2>
          <p className="text-sky-200 font-medium">Featured Work</p>
        </div>

        <div className="relative border-l-2 border-dashed border-sky-300 md:border-none">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`mb-16 flex flex-col md:flex-row items-center w-full ${project.align === 'left' ? 'md:justify-start' : 'md:justify-end'} relative`}
            >
              {/* Waypoint Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-sky-500 z-10"></div>
              
              {/* Connector line for desktop */}
              <div className={`hidden md:block absolute top-1/2 w-[10%] h-0.5 bg-sky-300 ${project.align === 'left' ? 'right-1/2' : 'left-1/2'}`}></div>

              <div className={`w-full pl-6 md:pl-0 md:w-[45%] ${project.align === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="border border-sky-500/20 bg-sky-900/10 p-6 hover:bg-sky-900/30 transition-colors duration-300 relative group rounded-sm backdrop-blur-sm">
                  
                  {/* Tech HUD corner accent */}
                  <div className={`absolute top-0 w-4 h-4 border-t-2 ${project.align === 'left' ? 'right-0 border-r-2' : 'left-0 border-l-2'} border-sky-400 opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/20 rounded-lg shadow-sm border border-white/30">
                      {project.icon}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-sky-300 hover:text-white transition-colors">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.demo} className="text-sky-300 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-sky-100 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sky-200 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs font-semibold bg-white/10 text-sky-100 rounded border border-white/30 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;
