import { Loader } from "lucide-react";

export default function Spinner(){
    return (
        <Loader className="animate-spin flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    )
}