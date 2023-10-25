import Link from "next/link";
import { Metadata } from "next";
export const metadata:Metadata={
    title:"Tailwind"
}
export default function TailwindLayout({children}:{children:React.ReactElement}){
    return <>
    <div className="text-center px-2">
       
    <Link className="px-[7px] text-blue-900 hover:opacity-50 " href='/tailwind'>Base</Link>
    <Link className="px-[7px] text-blue-900 hover:opacity-50 " href='/tailwind/responsive'>Responsive</Link>
</div>
    <div>{children}</div>
    </>

}