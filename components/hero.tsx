import Image from "next/image";
import heroImage from "../public/869d950569d47622991d2b5d677e26f9.jpg";
import { Button } from "./ui/button";

export default function HeroSection(){
    return (
        <div id="hero" className="flex flex-col lg:flex-row justify-between items-center bg-[#eceada] min-h-screen lg:min-h-[80vh] px-4 lg:px-8 py-8 lg:py-7">
            {/* Text Content */}
            <div className="text-[#00492c] flex flex-col space-y-4 lg:space-y-6 text-center lg:text-left lg:ml-5 lg:pl-5 max-w-2xl lg:max-w-none order-2 lg:order-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-black font-bold">
                    FALCONWOOD REALTY
                </h1>
                
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-800">
                    We&#39;re more than just a real estate firm.
                </h2>
                
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                    <span className="block">We are here to</span>
                    <span className="block">help you find</span>
                    <span className="block">your dream home.</span>
                </div>
                
                <div className="pt-4 lg:pt-6">
                    <a href="#contact-us">
                        <Button className="px-6 py-3 text-lg font-medium hover:scale-105 transition-transform duration-200">
                            Contact Us
                        </Button>
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="flex justify-center w-full lg:w-auto">
                    <Image 
                        src={heroImage} 
                        alt="hero-image" 
                        className="w-[350px] sm:w-[370px] md:w-[470px] lg:w-[370px] xl:w-[470px] object-cover rounded-lg shadow-lg"
                        priority={true}
                        sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 700px"
                    />
                </div>
            </div>
        </div>
    )
}