import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Navigasi(){
    const location = useLocation();
    const isSurat = location.pathname.startsWith('/surat');
    const suratIds = ['1','2','3','4','5'];
    return(
        <>
        <div className="flex justify-center items-center space-x-4 fixed bottom-9 left-0 w-full">
            {isSurat ? (
                <>
                    {suratIds.map((id) => (
                        <button key={id} className="p-2 m-2 bg-purple-200 rounded-xl">
                            <Link to={`/surat/${id}`}>Surat {id}</Link>
                        </button>
                    ))}
                    <button className="p-2 m-2 bg-purple-300 rounded-xl"><Link to="/">Kembali</Link></button>
                </>
            ) : (
                <>
                    <button className="p-2 m-2 bg-purple-200 rounded-xl"><Link to="/">Home</Link></button>
                    <button className="p-2 m-2 bg-purple-200 rounded-xl"><Link to="/gallery">Gallery</Link></button>
                    <button className="p-2 m-2 bg-purple-200 rounded-xl"><Link to="/surat">Surat</Link></button>
                    <button className="p-2 m-2 bg-purple-200 rounded-xl"><Link to="/game">Game</Link></button>
                </>
            )}
        </div>
        </>
    )
}