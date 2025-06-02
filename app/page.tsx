import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
async function getUserDetails(){
  const response = await axios.get(`http://localhost:3000/api/user`);
  if(response)
    return response.data;
  else return "Error fetching data!"
}
export default async function Home() {
  const userData =await getUserDetails();
  return (
    <div className="flex flex-col justify-center gap-56">
      <div className="border-b p-4 font-bold flex justify-between items-center relative">
          <h1>Acme Inc.</h1>
          <div>
            <Button variant="ghost"><Link href="/signup">Signup</Link></Button>
            <Button variant="ghost"><Link href="/login">Login</Link></Button>
          </div>
      </div>
      <div className="border flex flex-col justify-center w-60 h-35 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
          <span className="flex justify-center">Id: {userData.id}</span>
          <span className="flex justify-center">Name: {userData.name}</span>
          <span className="flex justify-center">Username: {userData.username}</span>
          <span className="flex justify-center">Email: {userData.email}</span>
      </div>
    </div>
  );
}
