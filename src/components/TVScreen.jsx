import React from "react";
import { Link,useNavigate } from "react-router-dom";

export default function TVScreen({ children }) {
   const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative top-0.5 w-[750px] max-w-10xl h-[500px] bg-black rounded-3xl shadow-2xl border-8 border-purple-500 flex items-center justify-center overflow-y-auto">
        {/* TV content */}
        {children}
        {/* TV frame effect */}
        <div className="absolute p-5 top-0 left-0 w-full h-full pointer-events-none rounded-3xl border-4 border-purple-400"></div>
        {/* Lampu indikator */}
<button onClick={() => navigate(-1)}>
  <div className="absolute bottom-3 right-6 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
</button>
{/* Logo TV */}
<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-purple-400 font-bold text-xs">UnguJanda</div>
      </div>
      {/* Kaki TV */}
<div className="w-24 h-4 bg-purple-700 rounded-b-lg mt-2 shadow-lg"></div>
    </div>
  );
}
