import { Eye, EyeClosed } from "lucide-react"

export default function Toggle(props: any){
    
    return props.view ? <Eye onClick={() => props.setView(false)} className="text-gray-400"/> : <EyeClosed onClick={() => props.setView(true)} className="text-gray-400"/>
    
}