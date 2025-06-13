import { Star } from "lucide-react";
import { Headset } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { House } from 'lucide-react';

export default function WorkWithUsSection(){
    return(
<div className="flex flex-col items-center bg-[#00492c] py-16 md:py-29 px-4">
  {/* Title - Responsive text size */}
  <div className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-10 p-4 text-center">
    WHY WORK WITH US ?
  </div>

  {/* Original Large Screen Layout (preserved exactly) */}
  <div className="hidden lg:flex flex-row items-center gap-25 p-5">
    {[
      { icon: <House className="size-35 text-white stroke-1"/>, value: "132", label: "Homes sold in 2025" },
      { icon: <Star className="size-35 text-white stroke-1"/>, value: "20", label: "Years of experience" },
      { icon: <Headset className="size-35 text-white stroke-1"/>, value: "04", label: "Dedicated Agents" },
      { icon: <CircleDollarSign className="size-35 text-white stroke-1"/>, value: "$500", label: "Million in properties sold" }
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        {item.icon}
        <div className="text-[70px] font-semibold text-white">{item.value}</div>
        <div className="text-white">{item.label}</div>
      </div>
    ))}
  </div>

  {/* Tablet Layout (2x2 grid) */}
  <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-10 p-5 w-full max-w-4xl">
    {[
      { icon: <House className="size-25 text-white stroke-1"/>, value: "132", label: "Homes sold in 2025" },
      { icon: <Star className="size-25 text-white stroke-1"/>, value: "20", label: "Years of experience" },
      { icon: <Headset className="size-25 text-white stroke-1"/>, value: "04", label: "Dedicated Agents" },
      { icon: <CircleDollarSign className="size-25 text-white stroke-1"/>, value: "$500", label: "Million in properties sold" }
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center w-[45%]">
        {item.icon}
        <div className="text-[50px] font-semibold text-white">{item.value}</div>
        <div className="text-white text-center">{item.label}</div>
      </div>
    ))}
  </div>

  {/* Mobile Layout (single column) */}
  <div className="md:hidden flex flex-col items-center gap-8 p-5 w-full">
    {[
      { icon: <House className="size-20 text-white stroke-1"/>, value: "132", label: "Homes sold in 2025" },
      { icon: <Star className="size-20 text-white stroke-1"/>, value: "20", label: "Years of experience" },
      { icon: <Headset className="size-20 text-white stroke-1"/>, value: "04", label: "Dedicated Agents" },
      { icon: <CircleDollarSign className="size-20 text-white stroke-1"/>, value: "$500", label: "Million in properties sold" }
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        {item.icon}
        <div className="text-[40px] font-semibold text-white">{item.value}</div>
        <div className="text-white text-center">{item.label}</div>
      </div>
    ))}
  </div>
</div>
    )
}