import React from "react";

export default function TVScreen({ children }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative top-0.5 w-[750px] max-w-10xl h-[500px] bg-black rounded-3xl shadow-2xl border-8 border-purple-500 flex items-center justify-center overflow-y-auto">
        {/* TV content */}
        {children}
        {/* TV frame effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-3xl border-4 border-purple-400"></div>
      </div>
    </div>
  );
}
