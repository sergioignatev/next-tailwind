'use client'
import Link from "next/link";
import { Metadata } from "next"
import { usePathname } from "next/navigation";

export const metadat:Metadata={
    title:"Tailwind"
}
export default function TailwindLayout({children}:{children:React.ReactElement}){
    const pathname=usePathname()
    const ar=['','responsive','circle','animation']
    return <>
    <div className="justify-center  px-2 flex ">
{ar.map(i=>

<Link className={pathname===`/tailwind/${i}`||pathname===`/tailwind${i}`?' rotate-12  px-6':' px-6' } href={`/tailwind/${i}`}>{i===""?"BASE":i.toUpperCase()}
</Link>
)}

      
  
</div>
    <div>{children}</div>
    </>

}