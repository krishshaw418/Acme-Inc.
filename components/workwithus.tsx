import { Star } from "lucide-react";
import { Headset } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { House } from 'lucide-react';

export default function WorkWithUsSection(){
    return(
        <div className="flex flex-col items-center bg-[#00492c] py-29 px-4">
            <div className="text-white text-5xl font-bold mb-10 p-4">
                WHY WORK WITH US ?
            </div>
            <div className="flex flex-row items-center gap-25 p-5">
                <div className="flex flex-col items-center">
                    <House className="size-35 text-white stroke-1"/>
                    <div className="text-[70px] font-semibold text-white">132</div>
                    <div className="text-white">Homes sold in 2025</div>
                </div>
                <div className="flex flex-col items-center">
                    <Star className="size-35 text-white stroke-1"/>
                    <div className="text-[70px] font-semibold text-white">20</div>
                    <div className="text-white">Years of experience</div>
                </div>
                <div className="flex flex-col items-center">
                    <Headset className="size-35 text-white stroke-1"/>
                    <div className="text-[70px] font-semibold text-white">04</div>
                    <div className="text-white">Dedicated Agents</div>
                </div>
                <div className="flex flex-col items-center">
                    <CircleDollarSign className="size-35 text-white stroke-1"/>
                    <div className="text-[70px] font-semibold text-white">$500</div>
                    <div className="text-white">Million in properties sold</div>
                </div>
            </div>
        </div>
    )
}