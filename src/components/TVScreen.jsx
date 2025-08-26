import React from "react";
import { useNavigate } from "react-router-dom";

export default function TVScreen({ children }) {
  const navigate = useNavigate();
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
        <div className="absolute inset-4 bg-black rounded-[18px] overflow-y-auto overflow-x-hidden flex items-center justify-center">
          {children}
        </div>
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
          <div className="w-5 h-5 flex justify-center items-center bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.85)]"></div>
        </button>
      </div>
      {/* Stand */}
      <div className="w-28 h-1.5 bg-purple-900 rounded-b-lg mt-3 shadow-[0_6px_16px_rgba(0,0,0,0.4)]"></div>
    </div>
  );
}
