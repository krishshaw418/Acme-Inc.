"use client"
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LogoutButton(){
    const router = useRouter();
    return (
        <Button variant="ghost" className="text-white" onClick={async () => {
            try {
                const response = await axios.post(`/api/auth/logout`);
                toast.success(response.data.message);
                router.push('/');
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong!");
            }
        }}>Logout</Button>
    )
}