import { InputInt } from "./interfaces"
export function Input({placeholder,type,onChange,name}:InputInt){
    return <input
className={`focus:outline-none focus:bg-slate-200 focus:py-[16px]  focus:border-[white] bg-white px-1  py-[8px] 
rounded-lg 
w-full my-3
border-[1px]
border-[grey]
`}

name={name}
     type={type}
    placeholder={placeholder}
    onChange={onChange}
    />

}