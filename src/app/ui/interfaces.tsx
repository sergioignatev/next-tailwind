export interface InputInt{
    placeholder?:string,
    type?:string,
    name?:string,
    onChange?:()=>void
}
export interface Form{
    name?:string,
    age?:string,
    country?:string,
   
    submit?:string,
    type?:string[],
    change?:string,
   header:string|React.ReactNode,
   onSubmit?:()=>void|any,
   click?:()=>void,
   other?:string[],
   children?:JSX.Element|string
}