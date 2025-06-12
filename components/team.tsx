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

    const scrollAmount = containerRef.current.offsetWidth / 4;
    containerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#c1d0bd] flex flex-col items-center py-24 px-4 ">
      <div className="text-[#00492c] text-5xl font-bold mb-8">MEET THE TEAM</div>

      <div className="relative w-full max-w-7xl">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Track */}
        <div
          ref={containerRef}
          className="flex overflow-hidden gap-6 px-12"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] bg-[#00492c] text-white rounded-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover p-4"
              />
              <div className="text-center pb-4">
                <h1 className="text-xl font-bold">{member.name}</h1>
                <p className="text-[17px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute   right-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
