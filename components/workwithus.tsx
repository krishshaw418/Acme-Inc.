import { Star } from "lucide-react";
import { Headset } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { House } from 'lucide-react';

export default function WorkWithUsSection(){
    const stats = [
        {
            icon: House,
            number: "132",
            description: "Homes sold in 2025"
        },
        {
            icon: Star,
            number: "20",
            description: "Years of experience"
        },
        {
            icon: Headset,
            number: "04",
            description: "Dedicated Agents"
        },
        {
            icon: CircleDollarSign,
            number: "$500",
            description: "Million in properties sold"
        }
    ];

    return(
        <div id="experience" className="flex flex-col items-center bg-[#00492c] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
                WHY WORK WITH US?
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 max-w-7xl w-full">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        {/* Icon */}
                        <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 text-white stroke-1" />
                        </div>
                        
                        {/* Number */}
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 leading-none">
                            {stat.number}
                        </div>
                        
                        {/* Description */}
                        <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-[200px]">
                            {stat.description}
                        </div>
                    </div>
                ))}
            </div>

            {/* Optional decorative elements */}
            <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col items-center">
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-white/30 rounded-full mb-4"></div>
                <p className="text-white/80 text-sm sm:text-base md:text-lg text-center max-w-2xl leading-relaxed">
                    Our proven track record and dedicated team make us the trusted choice for all your real estate needs.
                </p>
            </div>
        </div>
    )
}