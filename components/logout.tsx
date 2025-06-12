"use client"
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import logoutImage from "../public/logout_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png";
import Image from "next/image";

export default function LogoutButton(){
    const router = useRouter();
    return (
        <button className="hover: cursor-pointer m-2 h-5 w-5" onClick={async () => {
            try {
                const response = await axios.post(`/api/auth/logout`);
                toast.success(response.data.message);
                router.push('/');
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong!");
            }
        }}><Image src={logoutImage} alt="logout-image"/></button>
    )
}