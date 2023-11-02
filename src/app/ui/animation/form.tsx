'use client'
import { useState } from "react"
import { GreenButton, RedButton } from "../buttons"
import { Input } from "../input"
import { Form } from "../interfaces"
export function MyForm({name,age,country,change,header,submit,click,other,children}:Form){
    
    
return <div className=" flex justify-center py-6">
    <form className="max-w-[500px] sm:min-w-[500px] min-v-[300px] sm:p-6 px-3  ">
    <h1 className="text-center text-[30px] ">{header} </h1>
 {name&&<><p>Enter {name}</p> <Input placeholder={name}/></>}
 {age&&<><p>Enter {age}</p><Input placeholder={age} type='number'/></>}
 {country&&<><p>Enter {country}</p> <Input placeholder={country}/></>}

<>{children}</>
 {other&&other.map(i=><>
    <p>Enter {i}</p>
    <Input placeholder={i} name={i} type='text'/></>)}
    
    <RedButton onMouseOver={click} ><>{submit}</></RedButton>
    
    {change&&<GreenButton><>{change}</></GreenButton>}
    
</form>
</div>


}