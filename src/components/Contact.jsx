import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, PlaneLanding } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    // Bring up the terminal building/card
    gsap.fromTo(terminalRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: terminalRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section id="contact" className="py-32 relative z-10 min-h-screen flex items-end justify-center">
      
      {/* Runway lights background effect */}
      <div className="absolute inset-x-0 bottom-0 h-64 flex justify-between px-4 sm:px-20 opacity-30 pointer-events-none">
        <div className="w-1 h-full border-r-[10px] border-dotted border-yellow-500 transform -skew-x-[45deg]"></div>
        <div className="w-1 h-full border-l-[10px] border-dotted border-yellow-500 transform skew-x-[45deg]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-20">
        
        <div ref={terminalRef} className="max-w-4xl mx-auto glass-panel-dark p-8 md:p-12 border-t-4 border-sky-400">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white tracking-wide mb-2 flex items-center justify-center gap-3">
              <PlaneLanding size={32} className="text-sky-400" /> Contact
            </h2>
            <p className="text-gray-300">Let's Connect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have a project idea, a job opportunity, or just want to connect, please reach out!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:sivagunal15@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-sky-400 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sky-400/20">
                    <Mail size={18} />
                  </div>
                  <span>sivagunal15@gmail.com</span>
                </a>
                
                <a href="tel:9500856348" className="flex items-center gap-4 text-gray-300 hover:text-sky-400 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sky-400/20">
                    <Phone size={18} />
                  </div>
                  <span>+91 9500856348</span>
                </a>
                
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sky-400/20">
                    <MapPin size={18} />
                  </div>
                  <span>Puducherry, India</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a href="https://github.com/Gunal1509" target="_blank" rel="noreferrer" className="w-12 h-12 rounded bg-white/5 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors text-gray-400">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/Gunal s" target="_blank" rel="noreferrer" className="w-12 h-12 rounded bg-white/5 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors text-gray-400">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Comms Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors placeholder-gray-500"
                  placeholder="Passenger Name"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors placeholder-gray-500"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <textarea 
                  rows="4"
                  className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors placeholder-gray-500 resize-none"
                  placeholder="Transmission Message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 rounded-lg bg-sky-500 text-white font-bold tracking-widest hover:bg-sky-400 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.5)] uppercase text-sm"
              >
                Transmit Signal
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
