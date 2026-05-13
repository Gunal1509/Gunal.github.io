import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const gridRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // HUD Grid scales out
    gsap.to(gridRef.current, {
      scale: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Text moves up
    gsap.to(textRef.current, {
      y: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      }
    });
  }, []);

  return (
    <section id="hero-section" className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* High-tech HUD Altimeter/Grid Background */}
      <div 
        ref={gridRef} 
        className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none"
      >
        {/* Central target rings */}
        <div className="absolute w-[60vh] h-[60vh] border border-sky-500/50 rounded-full"></div>
        <div className="absolute w-[40vh] h-[40vh] border border-sky-400/30 rounded-full"></div>
        
        {/* Horizontal & Vertical crosshairs */}
        <div className="absolute w-full h-[1px] bg-sky-500/20"></div>
        <div className="absolute h-full w-[1px] bg-sky-500/20"></div>

        {/* Altitude scale (aesthetic) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 h-2/3 w-8 border-l border-sky-400/50 flex flex-col justify-between py-10 font-mono text-[10px] text-sky-400/70">
          <span>+30K</span>
          <span>+20K</span>
          <span>+10K</span>
          <span>0.00</span>
        </div>
      </div>

      {/* Text Content */}
      <div ref={textRef} className="container mx-auto px-6 z-10 flex flex-col items-center justify-center text-center mt-[-10vh]">
        <div className="font-mono text-xs md:text-sm text-sky-400 mb-6 tracking-[0.3em] uppercase flex items-center gap-4">
          <span className="w-8 h-[1px] bg-sky-400"></span>
          System Initialization
          <span className="w-8 h-[1px] bg-sky-400"></span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-4 tracking-tighter">
          Gunal S
        </h1>
        
        <div className="text-2xl md:text-4xl font-light mb-8 text-sky-200 tracking-wide">
          React Developer
        </div>
        
        <p className="text-sm md:text-base text-sky-300 max-w-xl font-mono mb-12 border border-sky-500/30 bg-sky-900/20 px-6 py-4 rounded backdrop-blur-sm">
          ENGAGING DESCENT PROTOCOL. PREPARING FOR PORTFOLIO OVERVIEW.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-sky-400 flex flex-col items-center gap-2 opacity-70">
        <span className="text-[10px] font-mono tracking-widest uppercase">Initiate Descent</span>
        <ChevronDown size={20} className="animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
