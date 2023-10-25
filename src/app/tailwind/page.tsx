import { Metadata } from "next"
export const metadata:Metadata={
    title:"TaliwindBase"
}
export default function Tailwind(){
    return <main className="flex min-h-screen flex-col items-center  p-24">
  <div className="sm:bg-[red] md:text-green-600 text-white">Hello There</div>
        <div className="group  p-28">
        <button className="shadow-xl shadow-[#529c52] border-[#529c52] border-[1px] bg-[#529c52] px-3 py-2 rounded-md text-white m-3 hover:bg-[#8ad08a]">Принял предложение</button>
        <button className="shadow-xl hover:shadow-[#529c52] border-[#529c52] border-[1px] px-3 py-2 rounded-md  text-[#529c52]   ">Пока думаю</button>
   </div>
    <div  className="decoration-dotted px-6 py-2 rounded-md shadow-xl  bg-white border-slate-100 border-[0.5px]">test</div>
   </main>
}