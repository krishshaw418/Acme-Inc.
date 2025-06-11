import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import member1 from "../public/f1daf9cebfbcbefb8e86677b8b0cbbc0.jpg";
import member2 from "../public/a7aad10395c5f95401001b8ec68c680e.jpg";
import member3 from "../public/a650286ac35fe165d48d39cc1673d087.jpg";
import member4 from "../public/26d288fc3cd3505c3bed370e33407902.jpg";
export default function TeamSection(){
    return (
        <div className="bg-[#c1d0bd] flex flex-col gap-5 justify-center items-center p-[18px]">
            <div className="text-[#00492c] text-5xl font-bold mt-[30px] pt-[65px] pb-3">MEET THE TEAM</div>
            <div className="flex flex-row gap-5 m-5 pb-[60px]">
                <div className="flex flex-col justify-center items-center bg-[#00492c]">
                <Image
                src={member1}
                alt="member-1"
                className="h-90 w-68 p-4"/>
                <div className="flex flex-col justify-center items-center pb-4 text-white">
                    <h1 className="text-xl font-bold">Kiara Austen</h1>
                    <h1 className="text-[17px]">Real Estate Agent</h1>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#00492c]">
                <Image 
                src={member2} 
                alt="member-2" 
                className="h-90 w-68 p-4"/>
                <div className="flex flex-col justify-center items-center pb-4 text-white">
                    <h1 className="text-xl font-bold">Leon France</h1>
                    <h1 className="text-[17px]">Consultant</h1>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#00492c]">
                <Image 
                src={member3} 
                alt="member-3" 
                className="h-90 w-68 p-4"/>
                <div className="flex flex-col justify-center items-center pb-4 text-white">
                    <h1 className="text-xl font-bold">Teddy Yuhui</h1>
                    <h1 className="text-[17px]">Real Estate Agent</h1>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#00492c]">
                <Image 
                src={member4} 
                alt="member-4" 
                className="h-90 w-68 p-4"/>
                <div className="flex flex-col justify-center items-center pb-4 text-white">
                    <h1 className="text-xl font-bold">Sari Purdue</h1>
                    <h1 className="text-[17px]">Consultant</h1>
                </div>
                </div>
            </div>
        </div>
    )
}