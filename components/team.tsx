"use client";

import member1 from "../public/f1daf9cebfbcbefb8e86677b8b0cbbc0.jpg";
import member2 from "../public/a7aad10395c5f95401001b8ec68c680e.jpg";
import member3 from "../public/a650286ac35fe165d48d39cc1673d087.jpg";
import member4 from "../public/26d288fc3cd3505c3bed370e33407902.jpg";
import member5 from "../public/f1daf9cebfbcbefb8e86677b8b0cbbc0.jpg";
import member6 from "../public/a7aad10395c5f95401001b8ec68c680e.jpg";
import member7 from "../public/a650286ac35fe165d48d39cc1673d087.jpg";
import member8 from "../public/26d288fc3cd3505c3bed370e33407902.jpg";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const team = [
  {
    name: "Kiara Austen",
    role: "Real Estate Agent",
    image: member1,
  },
  {
    name: "Leon France",
    role: "Consultant",
    image: member2,
  },
  {
    name: "Teddy Yuhui",
    role: "Real Estate Agent",
    image: member3,
  },
  {
    name: "Sari Purdue",
    role: "Consultant",
    image: member4,
  },
  {
    name: "Sari Purdue",
    role: "Consultant",
    image: member5,
  },
  {
    name: "Sari Purdue",
    role: "Consultant",
    image: member6,
  },
  {
    name: "Sari Purdue",
    role: "Consultant",
    image: member7,
  },
  {
    name: "Sari Purdue",
    role: "Consultant",
    image: member8,
  },
  // Add more team members here...
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    // Responsive scroll amount based on screen size
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    let scrollAmount;
    if (isMobile) {
      scrollAmount = containerRef.current.offsetWidth; // Full width on mobile
    } else if (isTablet) {
      scrollAmount = containerRef.current.offsetWidth / 2; // Half width on tablet
    } else {
      scrollAmount = containerRef.current.offsetWidth / 3; // Third width on desktop
    }

    containerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div id="team" className="bg-[#c1d0bd] flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-[#00492c] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
        MEET THE TEAM
      </div>

      <div className="relative w-full max-w-7xl">
        {/* Left Arrow - Hidden on mobile */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 bg-[#00492c] hover:bg-[#00492c]/80 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto overflow-y-hidden gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-12 scrollbar-hide"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] lg:w-[280px] bg-[#00492c] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-3 sm:p-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 280px"
                />
              </div>
              <div className="text-center pb-4 sm:pb-6 px-3 sm:px-4">
                <h1 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  {member.name}
                </h1>
                <p className="text-sm sm:text-base text-gray-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow - Hidden on mobile */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 bg-[#00492c] hover:bg-[#00492c]/80 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Mobile scroll hint */}
      <div className="sm:hidden mt-4 text-[#00492c] text-sm text-center opacity-70">
        Swipe to see more team members
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}