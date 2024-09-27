import React, { useCallback, useEffect, useRef, useState } from 'react'
// This project utilizes various hooks
function Password_gen() {
    const[length,setLength]=useState(8);
    const[numberAllowed,setnumberAllowed]=useState(false);
    const[charAllowed,setcharAllowed]=useState(false);
    const[password,setPassword]=useState("");
    let passwordRef=useRef(null);
    const passwordGenerator=useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPWRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed){
            str+="0123456789";
        }
        if(charAllowed){
            str+="!@#$%^&*()";
        }

        for (let index =1 ; index <=length; index++){
           let char=Math.floor(Math.random()*str.length +1);
            pass+= str.charAt(char);
           
      
        }

        console.log(pass);
        setPassword(pass);

    },[length,numberAllowed,charAllowed])

    const copytoClipboard=()=>{
        window.navigator.clipboard.writeText(password);
       passwordRef.current?.select()
    }
   
 useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator]);
    return (
     
    <div className=' text-slate-100 bg-black flex flex-col items-center  justify-start w-full h-screen '>
        <h1 className=' text-blue-200 '>Password Generator</h1>
            <div className=' mt-10  items-center max-w-md bg-slate-600 text-orange-500 rounded-lg px-4 py-4 mb-6'>
                <div className='flex text-cyan-500'>
                    <input type="text" ref={passwordRef} value={password} readOnly placeholder='Password' className=' mr-3 rounded w-96'/>
                    <button onClick={copytoClipboard} className='border-solid rounded px-1 py-1 text-white bg-blue-600 border-slate-950 border-2 hover:bg-lime-700'>copy</button>
                </div>
                
                <div className='flex items-center gap-x-1'>
                    <input type="range" onChange={(e)=>{setLength(e.target.value)}} min={6} max={20} value={length} id='length' className=' cursor-pointer' />
                    <label htmlFor="length">Length:{length}</label>
                   
                    <input type="checkbox" onChange={()=>{setnumberAllowed(previ => !previ)}} defaultValue={numberAllowed} id='numbers' className=' ml-2' />
                    <label htmlFor="numbers">Numbers</label>
                   
                    <input type="checkbox" onChange={()=>{setcharAllowed(prev => !prev)}} defaultValue={charAllowed} id='characters' className='ml-2' />
                    <label htmlFor="characters">Characters</label>
                </div>
            </div>
        
     
    </div>
      
    )
}

export default Password_gen
