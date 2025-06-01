import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
      <div className="border-b p-4 font-bold flex justify-between items-center">
          <h1>Acme Inc.</h1>
          <div>
            <Button variant="ghost"><Link href="/signup">Signup</Link></Button>
            <Button variant="ghost"><Link href="/login">Login</Link></Button>
          </div>
      </div>
  );
}
