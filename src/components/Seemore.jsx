import React from 'react'
import { Link } from 'react-router-dom'


// foto
import memory1 from '../assets/memory (31).jpeg'
import memory2 from '../assets/memory (33).jpeg'
import memory3 from '../assets/memory (32).jpeg'
import memory4 from '../assets/memory (22).jpeg'
import memory5 from '../assets/memory (14).jpeg'
import memory6 from '../assets/memory (30).jpeg'
import memory7 from '../assets/memory (20).jpeg'
import memory8 from '../assets/memory (16).jpeg'
import memory9 from '../assets/hape (1).jpeg'
import memory10 from '../assets/hape (2).jpeg'

import memory12 from '../assets/hape (4).jpeg'
import memory13 from '../assets/hape (5).jpeg'
import memory14 from '../assets/hape (6).jpeg'



const Seemore = () => {
  return (<>
  
    <div className='h-screen w-full flex flex-col items-center justify-center bg-purple-300 mt-5 p-6 pt-8 pb-12'>
      <div className="grid h-full w-full grid-cols-6 grid-rows-3 gap-3 p-5 py-16 overflow-hidden ">
        <div className="col-span-2 row-span-1 bg-amber-100"><img src={memory2} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory4} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-2 bg-amber-100"><img src={memory1} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory7} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory9} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-2 row-span-1 bg-amber-100"><img src={memory6} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory10} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-2 row-span-1 bg-amber-100"><img src={memory3} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory5} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory8} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory12} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-2 row-span-1 bg-amber-100"><img src={memory13} alt="" className="object-cover w-full h-full " /></div>
        <div className="col-span-1 row-span-1 bg-amber-100"><img src={memory14} alt="" className="object-cover w-full h-full " /></div>
      </div>
      
      
    </div>
  </>
  )
}

export default Seemore