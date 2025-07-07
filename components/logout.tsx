"use client"
import axios from "axios";
import { toast } from "sonner";
import logoutImage from "../public/logout_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { signOut } from "next-auth/react"

export default function LogoutButton(){
    return (
        <Tooltip>
            <TooltipTrigger className="m-2 h-5 w-5" onClick={async () => {
            try {
                const response = await axios.post(`/api/auth/logout`);
                toast.success(response.data.message);

                await signOut({callbackUrl: "/"});
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong!");
            }
        }}>
                <Image src={logoutImage} alt="logout-image"/>
            </TooltipTrigger>
            <TooltipContent>
                Logout
            </TooltipContent>
        </Tooltip>
    )
}