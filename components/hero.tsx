import Image from "next/image";
import heroImage from "../public/869d950569d47622991d2b5d677e26f9.jpg";
import { Button } from "./ui/button";

export default function HeroSection(){
    return (
<div>
<div id="hero" className="hidden lg:flex flex-row justify-between items-center bg-[#eceada]">
  <div className="text-[#00492c] text-6xl font-bold flex flex-col ml-5 pl-5">
    <h1 className="text-3xl text-black font-bold">FALCONWOOD REALTY</h1>
    <h1 className="text-xl font-semibold pt-2 pb-2">We're more than just a real estate firm.</h1>
    <span>We are here to <br /> help you find <br /> your dream home.</span>
    <div className="pt-2"><a href="#contact-us"><Button>Contact Us</Button></a></div>
  </div>
  <div className=""><Image src={heroImage} alt="hero-image" className="h-182 w-190" priority={true}/></div>
</div>

{/* Mobile/Tablet Hero (only shows below lg) */}
<div id="hero-mobile" className="lg:hidden flex flex-col items-center bg-[#eceada] pt-20 pb-10 px-5 text-center">
  <div className="text-[#00492c] text-4xl font-bold flex flex-col items-center">
    <h1 className="text-2xl text-black font-bold">FALCONWOOD REALTY</h1>
    <h1 className="text-lg font-semibold py-3">We're more than just a real estate firm.</h1>
    <span className="text-3xl pb-5">
      We are here to help you find your dream home.
    </span>
    <div className="pt-2"><a href="#contact-us"><Button>Contact Us</Button></a></div>
  </div>
  <div className="mt-8">
    <Image 
      src={heroImage} 
      alt="hero-image" 
      className="h-auto w-full max-w-xs"
      priority={true}
    />
  </div>
</div>
</div>
    )
}