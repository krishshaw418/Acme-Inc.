import { Eye, EyeOff } from "lucide-react"
import React from "react";

type View = {
    view: boolean;
    setView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle(props: View){
    
    return props.view ? <Eye onClick={() => props.setView(false)} className="text-gray-400 size-5"/> : <EyeOff onClick={() => props.setView(true)} className="text-gray-400 size-5"/>
    
}