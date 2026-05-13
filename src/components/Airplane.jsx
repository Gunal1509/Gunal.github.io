import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Airplane = () => {
  const planeRef = useRef(null);

  useEffect(() => {
    // Bank left/right slightly based on scroll velocity (smoother)
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        const targetRotation = 180 + (velocity / 200); 
        gsap.to(planeRef.current, {
          rotation: Math.max(170, Math.min(190, targetRotation)), // Tighter clamping for sleek feel
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto"
        });
        
        // Return to 180 (pointing down) when stopped
        gsap.delayedCall(0.1, () => {
          if (Math.abs(self.getVelocity()) < 10) {
            gsap.to(planeRef.current, {
              rotation: 180,
              duration: 1,
              ease: "power2.out"
            });
          }
        });
      }
    });
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div ref={planeRef} className="relative w-12 h-12 sm:w-16 sm:h-16 rotate-180 opacity-90 drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]">
        {/* Sleek Professional Jet Silhouette */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-full h-full">
          <path d="M12 2L10 6L10 12L2 16L2 18L10 16L10 20L8 22L8 24L12 23L16 24L16 22L14 20L14 16L22 18L22 16L14 12L14 6L12 2Z"/>
        </svg>
      </div>
    </div>
  );
};

export default Airplane;
