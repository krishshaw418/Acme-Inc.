import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import LogoutButton from "./logout";
import { GalleryVerticalEnd } from "lucide-react"
import MobileMenu from "./mobile-menu";
import { OurTeams, Experience, ContactUs, FeaturedList, FeedBack } from "./nav-links";

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
        <div className="w-full bg-[#00492c] bg-opacity-20 backdrop-blur-xl">
            <div className="px-4 py-4 font-bold flex justify-between items-center relative">
                {/* Logo Section */}
                <div className="text-white flex flex-row justify-center items-center gap-2">
                    <GalleryVerticalEnd className="size-4" />
                    <a href="#hero" className="text-lg sm:text-xl">Acme Inc.</a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-row items-center gap-8 text-white font-medium">
                    <a href="#team" className="hover:underline hover:underline-offset-5 transition-all">Our Team</a>
                    <a href="#featuredlist" className="hover:underline hover:underline-offset-5 transition-all">Featured List</a>
                    <a href="#experience" className="hover:underline hover:underline-offset-5 transition-all">Experience</a>
                    <a href="#feedback" className="hover:underline hover:underline-offset-5 transition-all">Feedback</a>
                    <a href="#contact-us" className="hover:underline hover:underline-offset-5 transition-all">Contact</a>
                </div>

                {/* Desktop Auth Section */}
                <div className="hidden lg:flex">
                    {userData ? (
                        <div className="flex items-center justify-center gap-2">
                            <h1
                                className="text-white font-medium truncate max-w-[100px] xl:max-w-[150px]"
                                title={userData.email}
                            >
                                {userData.email}
                            </h1>
                            <LogoutButton />
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Button variant="ghost" className="text-white hover:bg-white/10">
                                <Link href="/signup">Signup</Link>
                            </Button>
                            <Button variant="ghost" className="text-white hover:bg-white/10">
                                <Link href="/login">Login</Link>
                            </Button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <MobileMenu/>
            </div>

            {/* Mobile Menu */}
            <div 
                id="mobile-menu" 
                className="lg:hidden hidden bg-[#00492c] bg-opacity-95 backdrop-blur-xl"
            >
                <div className="px-4 py-6 space-y-4">
                    {/* Mobile Navigation Links */}
                    <div className="space-y-4">
                        <OurTeams/>
                        <FeaturedList/>
                        <Experience/>
                        <FeedBack/>
                        <ContactUs/>
                    </div>

                    {/* Mobile Auth Section */}
                    <div className="border-t border-white/20 pt-4">
                        {userData ? (
                            <div className="space-y-3">
                                <div className="text-white font-medium">
                                    <span className="text-sm text-gray-300">Logged in as:</span>
                                    <br />
                                    <span className="truncate" title={userData.email}>
                                        {userData.email}
                                    </span>
                                </div>
                                <LogoutButton />
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <Button 
                                    variant="ghost" 
                                    className="w-full text-white hover:bg-white/10 justify-start"
                                >
                                    <Link href="/signup" className="w-full text-left">Signup</Link>
                                </Button>
                                <Button 
                                    variant="ghost" 
                                    className="w-full text-white hover:bg-white/10 justify-start"
                                >
                                    <Link href="/login" className="w-full text-left">Login</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}