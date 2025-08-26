import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TVScreen({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [powerOn, setPowerOn] = useState(false);

  useEffect(() => {
    // trigger brief power-on animation on route change
    setPowerOn(true);
    const t = setTimeout(() => setPowerOn(false), 450);
    return () => clearTimeout(t);
  }, [location.pathname]);
  return (
    <div className="fixed inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
      {/* TV body */}
      <div className="relative w-[750px] max-w-[92vw] h-[500px] bg-gradient-to-b from-zinc-900 to-black rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-[10px] border-purple-700 pointer-events-auto">
        {/* Inner bezel */}
        <div className="absolute inset-0 rounded-[22px] border-[3px] border-purple-400/60 pointer-events-none"></div>
        {/* Glass reflection */}
        <div className="absolute inset-0 rounded-[22px] bg-gradient-to-tr from-white/5 via-white/2 to-transparent pointer-events-none mix-blend-screen"></div>
        {/* Top vents */}
        <div className="absolute -top-3 left-12 right-12 h-2 flex gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 bg-zinc-800 rounded-sm" />
          ))}
        </div>
        {/* Content viewport with its own scroll */}
        <div className="absolute inset-4 bg-black rounded-[18px] overflow-y-auto overflow-x-hidden">
          <div className="flex items-center justify-center min-h-full">
            {children}
          </div>
        </div>
        
        {/* TV Effects - Fixed to TV frame, not content */}
        {/* Scanlines overlay */}
        <div
          className="pointer-events-none absolute inset-4 z-20 opacity-20 mix-blend-overlay rounded-[18px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 2px, transparent 3px)",
            backgroundSize: "100% 3px",
          }}
        />
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-4 z-30 rounded-[18px]"
          style={{
            boxShadow: "inset 0 0 120px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.8)",
          }}
        />
        {/* Subtle flicker */}
        <div
          className="pointer-events-none absolute inset-4 z-20 rounded-[18px]"
          style={{
            animation: "tvFlicker 2.2s infinite",
          }}
        />
        {/* Power-on flash */}
        {powerOn && (
          <div className="pointer-events-none absolute inset-4 z-40 flex items-center justify-center bg-black rounded-[18px]">
            <div className="w-full h-[2px] bg-white" style={{ animation: "tvPowerOn 450ms ease-out forwards" }} />
          </div>
        )}
        {/* Decorative screws */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-zinc-700 rounded-full"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-zinc-700 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-zinc-700 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-zinc-700 rounded-full"></div>
        {/* Speaker grill (right) */}
        <div className="absolute top-10 right-2 bottom-10 w-3 flex flex-col gap-1 opacity-60">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-sm" />
          ))}
        </div>
        {/* Power/back button (center) */}
        <button onClick={() => navigate(-1)} className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-57">
          <div className="w-5 h-5 flex justify-center items-center bg-green-400 rounded-full shadow-green-500"></div>
        </button>
      </div>
      {/* Stand */}
      <div className="w-28 h-1.5 bg-purple-900 rounded-b-lg mt-3 shadow-[0_6px_16px_rgba(0,0,0,0.4)]"></div>
      {/* Keyframes for CRT effects */}
      <style>{`
        @keyframes tvFlicker {
          0% { opacity: 0.02; }
          5% { opacity: 0.08; }
          10% { opacity: 0.03; }
          20% { opacity: 0.06; }
          30% { opacity: 0.04; }
          40% { opacity: 0.07; }
          50% { opacity: 0.03; }
          60% { opacity: 0.06; }
          70% { opacity: 0.02; }
          80% { opacity: 0.07; }
          90% { opacity: 0.03; }
          100% { opacity: 0.05; }
        }
        @keyframes tvPowerOn {
          0% { transform: scaleY(0.02); opacity: 1; filter: blur(0px); }
          40% { transform: scaleY(1); opacity: 1; filter: blur(1px); }
          80% { transform: scaleY(1); opacity: 0.9; filter: blur(2px); }
          100% { transform: scaleY(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
