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
        <div className="flex flex-col justify-center gap-56 w-full z-10 bg-[#00492c] fixed bg-opacity-20 backdrop-blur-xl">
            <div className="p-4 font-bold flex justify-between items-center relative">
            <div className="text-white flex flex-row justify-center items-center gap-2">
                <GalleryVerticalEnd className="size-4" />
                <a href="#hero">Acme Inc.</a>
            </div>
            {userData? <div className="flex items-center justify-center gap-2"><h1 className="text-white font-medium">{userData.email}</h1><LogoutButton/></div>: 
            <div>
                <Button variant="ghost" className="text-white"><Link href="/signup">Signup</Link></Button> 
                <Button variant="ghost" className="text-white"><Link href="/login">Login</Link></Button>
            </div>}
            </div>
        </div>
    )
}