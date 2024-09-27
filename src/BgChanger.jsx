import React, { useState } from 'react'
import './BgChanger.css'


function BgChanger() {
  const [color, setColor] = useState("crimson");

  return (
    
  <div className=" h-screen w-full flex flex-wrap justify-center" 
  style={{backgroundColor:color}}>
      <h1 className=' text-fuchsia-300'>BackGround Changer</h1>

     <div className='fixed flex flex-wrap bottom-12 justify-center px-5 py-2 bg-slate-300 rounded-lg'>
    
      <button onClick={()=> setColor("crimson")} className=' mx-3 px-6 text-slate-300 shadow-lg bg-red-700 rounded-full'>Red</button>
      <button onClick={()=> setColor("teal")} className=' mx-3 px-6 text-shadow-lg text-slate-300 bg-blue-600 rounded-full'>Blue</button>
      <button onClick={()=> setColor("#000")} className=' bg-black rounded-full mx-3 px-6 text-slate-300 '>Black</button>

     </div>
  </div>
     
      
 
  )
}

export default BgChanger
