import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import LogoutButton from "./logout";
import { GalleryVerticalEnd } from "lucide-react"

async function getUserDetails(){
  const token = (await cookies()).get('access-token');
  if(!token) return;
  const payload = jwt.verify(token.value, process.env.JWT_SECRET!);
  if (!payload || typeof payload !== 'object' || !payload.id) return;
  const userDetail = await prisma.user.findUnique({
    where: { id: payload.id }
  });
  return userDetail;
}

export default async function Navbar(){
    const userData = await getUserDetails();
    return(
        <div className="flex flex-col justify-center gap-56 w-full z-10 bg-[#528a32] fixed bg-opacity-20 backdrop-blur-xl">
            <div className="border-b p-5 font-bold flex justify-between items-center relative">
            <div className="text-white flex flex-row justify-center items-center gap-2">
                <GalleryVerticalEnd className="size-4" /> Acme Inc.
            </div>
            {userData? <div><LogoutButton/></div>: 
            <div>
                <Button variant="ghost" className="text-white"><Link href="/signup">Signup</Link></Button> 
                <Button variant="ghost" className="text-white"><Link href="/login">Login</Link></Button>
            </div>}
            </div>
        </div>
    )
}