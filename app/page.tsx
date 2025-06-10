import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

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

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center gap-56">
      <div className="border-b p-4 font-bold flex justify-between items-center relative">
          <h1>Acme Inc.</h1>
          <div>
            <Button variant="ghost"><Link href="/signup">Signup</Link></Button>
            <Button variant="ghost"><Link href="/login">Login</Link></Button>
          </div>
      </div>
      {userData? 
      <div className="border flex flex-col justify-center w-80 h-40 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
          <span className="flex justify-center">Id: {userData.id}</span>
          <span className="flex justify-center">Email: {userData.email}</span>
      </div>: <div></div>}
    </div>
  );
}
