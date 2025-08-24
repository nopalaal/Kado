import React from "react";
import {Link} from 'react-router-dom';

export default function Navigasi(){
    return(
        <>
       

  <div className="flex justify-center items-center space-x-4 fixed bottom-9 left-0 w-full">
    <button className="p-2 m-2 bg-purple-200 rounded-xl"><Link to="/">Home</Link></button>
    <button className="p-2 m-2 bg-purple-200 rounded-xl"><Link to="/gallery">Gallery</Link></button>
    <button className="p-2 m-2 bg-purple-200 rounded-xl"><Link to="/surat">Surat</Link></button>
    
  </div>


        </>
    )
}