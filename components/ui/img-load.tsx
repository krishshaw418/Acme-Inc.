"use client"

import { useState } from "react";
import { Skeleton } from "./skeleton";
import heroImage from "../../public/869d950569d47622991d2b5d677e26f9.jpg";
import Image from "next/image";

function ImgLoadState() {
    const [loaded, setLoaded] = useState(false);
  return (
        <div className="w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="flex justify-center w-full lg:w-auto">
                    {
                        !loaded && <Skeleton className="w-[100%] h-[100%]"/>
                    }
                    <Image 
                        src={heroImage} 
                        alt="hero-image" 
                        className="w-[350px] sm:w-[370px] md:w-[470px] lg:w-[370px] xl:w-[470px] object-cover rounded-lg shadow-lg"
                        priority={true}
                        sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 700px"
                        onLoadingComplete={() => setLoaded(true)}
                    />
                </div>
        </div>
  )
}

export default ImgLoadState