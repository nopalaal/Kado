import React from "react";
import {Link} from 'react-router-dom';

export default function Navigasi(){
    return(
        <>
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow">
            <ul className="text-black flex space-x-2 justify-center ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/surat">Surat</Link></li>
            </ul>
        </nav>
        </>
    )
}