"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";
import axios from "axios";

export async function HandleLogin(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(`api/auth`,{
        email: email,
        password: password
      });
      toast.success("Login Successful!");
    } catch (error: any) {
      const message = error.response?.data?.message || "Login failed! Please try again.";
      toast.error(message);
    }

}

export function LoginButton(){
    return (
        <Button type="button" className="w-full" onClick={() => HandleLogin}>
          Login
        </Button>
    )
}
export function SignupButton(){
    return (
        <Button type="button" className="w-full" onClick={() => toast.error("This feature doesn't work yet!")}>
          Signup
        </Button>
    )
}