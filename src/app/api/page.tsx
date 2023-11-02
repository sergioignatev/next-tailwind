import { GreenButton, RedButton } from "../ui/buttons";
import { Input } from "../ui/input";

export default function (){
    return <div className="p-6">
      
     <Input
     placeholder="placeholder"
     />
    
<RedButton>
red 
</RedButton>
    <GreenButton>GREEn</GreenButton>
    </div>
}