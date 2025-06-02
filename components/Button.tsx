"use client"
import { Button } from "@/components/ui/button";
export function LoginButton(){
    return (
        <Button type="submit" className="w-full" onClick={() => alert("This feature doesn't work yet!")}>
          Login
        </Button>
    )
}