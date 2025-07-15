"use client"
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="flex justify-center min-h-screen items-center">
        <Card className="w-full max-w-sm">
            <CardHeader className="flex flex-col justify-center">
                <CardTitle>
                    Acme Inc.
                </CardTitle>
                <CardDescription>
                    Enter your email to reset your password
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="Email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button disabled={isSubmit} className="w-full" onClick={ async () => {
                    const response = await axios.post('/api/auth/resetpassword', {
                        email
                    });
                    if(response.status === 200){
                        toast.success(response.data.message);
                    }
                    else toast.error(response.data.message);
                    setIsSubmit(true);
                }}>
                    Send Password Reset Link
                </Button>
            
                <Button variant={'outline'} className="w-full">
                    <Link href={'/login'}>
                        Back to Login
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}