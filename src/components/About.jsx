import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const glow1 = useRef(null);
  const glow2 = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Parallax glows
    gsap.to(glow1.current, {
      y: -150,
      opacity: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.to(glow2.current, {
      y: -200,
      opacity: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    });

    // Fade in card
    gsap.fromTo(cardRef.current, 
      { opacity: 0, scale: 0.95, y: 50 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative min-h-screen flex items-center justify-center">
      
      {/* Background Technical Glows instead of cartoony clouds */}
      <div ref={glow1} className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div ref={glow2} className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={cardRef} className="max-w-4xl mx-auto glass-panel-light border border-sky-400/20 p-10 md:p-16 relative overflow-hidden rounded-sm">
          
          {/* Tech decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-sky-400/50"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-sky-400/50"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-sky-400/50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-sky-400/50"></div>

          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-light text-white tracking-widest uppercase flex items-center gap-4">
              <span className="w-8 h-[1px] bg-sky-400"></span>
              About Me
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-sky-200 font-light leading-relaxed text-left tracking-wide">
            I am a passionate <span className="text-sky-300 font-medium">React Developer</span> with a background in working on a variety of projects and improving my skills through self-learning and competitive programming. 
            <br /><br />
            I am a dedicated and growth-oriented individual, and I always look to improve my skills and build impactful projects in my career as a software developer. My approach combines clean code architecture with immersive, dynamic UI designs.
          </p>

          <div className="mt-8 font-mono text-xs text-sky-500/50 tracking-widest uppercase">
            END OF FILE //
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
