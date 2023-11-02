export default function Page({params}:{params:{id:string}}){
    return <div className="p-6 text-[40px] text-red-500 text-center">{params.id}</div>
}