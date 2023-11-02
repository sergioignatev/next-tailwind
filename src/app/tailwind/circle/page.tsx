import { MyForm } from "@/app/ui/animation/form"
import { Input } from "@/app/ui/input"
export default function (){
    return <div className="flex w-full">

       <div className="bg-white flex w-2/5 p-6 items-center h-screen  justify-center">

       <h1 className="text-[red] text-[48px]">LEFT</h1>

       </div>
       <div className="bg-[red] flex w-3/5 p-6 items-center h-screen rounded-l-full justify-center ">
<MyForm
header='Animation'
name='name'
submit='submit'
change='change'
>
   <input type="date" />
</MyForm>
<h1 className="text-white text-[48px]">RIGHT</h1>

       </div>
    </div>
}