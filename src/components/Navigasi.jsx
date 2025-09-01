import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Navigasi(){
    const location = useLocation();
    const isSurat = location.pathname.startsWith('/surat');
    const suratIds = ['1','2','3','4'];
    return(
        <>
        {/* Remote TV - horizontal bar centered under TV */}
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 w-full max-w-[900px] px-3 select-none">
            <div className="w-full  justify-center  rounded-full bg-zinc-900/90 border border-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white px-3 py-2 flex items-center gap-2 overflow-x-auto">
                {/* Power/Home */}
                <Link to="/" className="shrink-0 w-8 h-8 rounded-full bg-red-600 shadow hover:bg-red-500 active:scale-95 transition" title="Power/Home"></Link>

                {/* Separator */}
                <div className="h-6 w-px bg-zinc-700/70 mx-1"></div>

                {isSurat ? (
                    <div className="flex items-center gap-2 overflow-x-auto">
                        {suratIds.map((id) => (
                            <Link key={id} to={`/surat/${id}`} className="shrink-0 h-9 w-9 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center text-sm">
                                {id}
                            </Link>
                        ))}
                        <Link to="/surat" className="shrink-0 h-9 w-9 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center text-sm">0</Link>
                        <Link to="/" className="shrink-0 h-9 px-4 rounded-full bg-purple-600 text-white hover:bg-purple-500 active:scale-95 transition flex items-center justify-center text-xs">Back</Link>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 overflow-x-auto">
                        <Link to="/" className="shrink-0 h-9 px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center text-xs">Home</Link>
                        <Link to="/gallery" className="shrink-0 h-9 px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center text-xs">Gallery</Link>
                        <Link to="/museum" className="shrink-0 h-9 px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center text-xs">Museum</Link>
                        <Link to="/surat" className="shrink-0 h-9 px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center text-xs">Surat</Link>
                        <Link to="/game" className="shrink-0 h-9 px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center text-xs">Game</Link>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}