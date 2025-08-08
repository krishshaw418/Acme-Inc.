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
    <div className="flex justify-center min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-sm sm:max-w-md">
            <CardHeader className="flex flex-col justify-center space-y-2 sm:space-y-3 px-4 sm:px-6 pt-6 sm:pt-8">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-center">
                    Acme Inc.
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-center">
                    Enter your email to reset your password
                </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
                <form>
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <Label htmlFor="email" className="text-sm sm:text-base font-medium">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            className="h-10 sm:h-11 text-sm sm:text-base"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2 sm:gap-3 px-4 sm:px-6 pb-6 sm:pb-8">
                <Button 
                    disabled={isSubmit} 
                    className="w-full h-10 sm:h-11 text-sm sm:text-base font-medium" 
                    onClick={async () => {
                        try {
                            setIsSubmit(true);
                            const response = await axios.post('/api/auth/resetpassword', {
                                email
                            });
                            if(response.status === 200){
                                toast.success(response.data.message);
                            }
                            else {
                                toast.error(response.data.message);
                                setIsSubmit(false);
                            }
                        } catch (error) {
                            if (axios.isAxiosError(error)) {
                                toast.error(error.response?.data?.message || "Something went wrong");
                                console.error("Axios error:", error);
                            } else {
                                toast.error("An unexpected error occurred");
                                console.error("Unknown error:", error);
                            }
                            setIsSubmit(false);
                        }
                    }}
                >
                    {isSubmit ? 'Sending...' : 'Send Password Reset Link'}
                </Button>
            
                <Button 
                    variant={'outline'} 
                    className="w-full h-10 sm:h-11 text-sm sm:text-base"
                    asChild
                >
                    <Link href={'/login'}>
                        Back to Login
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}