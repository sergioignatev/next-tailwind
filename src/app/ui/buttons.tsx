'use client'
import {useState} from 'react'
export const GreenButton=({children,onMouseOver}:{children:React.ReactElement|string,onMouseOver?:()=>void,onClick?:()=>void})=>{
    
   
    const [rotate,setRotate]=useState(0)
    function handleRotate(){
       if(rotate===0){
        setRotate(90)
       }
      else{setRotate(0)}
    }
    return  <>
        <button onMouseEnter={onMouseOver} onClick={handleRotate} className={`rotate-${rotate} shadow-xl shadow-[#080808] border-[#529c52] border-[1px] bg-[#529c52] px-3 py-2 rounded-md text-white m-3 hover:bg-[#8ad08a] hover:border-[#8ad08a] min-w-[40%] `}>{children}</button>
</>
}
export const RedButton=({children,onMouseOver}:{children:React.ReactElement|string,onMouseOver?:()=>void})=>{
    
   
  const [rotate,setRotate]=useState(0)
  function handleRotate(){
     if(rotate===0){
      setRotate(90)
     }
    else{setRotate(0)}
  }
  return  <>
      <button onClick={onMouseOver}  className={`lg:bg-red-900 lg:border-red-900 rotate-${rotate} shadow-xl shadow-[#080808] border-[red] border-[1px] bg-[red] px-3 py-2 rounded-md text-white m-3 hover:bg-[#c04f4f] hover:border-[#c04f4f] min-w-[40%]`}>{children}</button>
</>
}
