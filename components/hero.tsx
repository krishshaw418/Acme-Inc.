import Image from "next/image";
import heroImage from "../public/869d950569d47622991d2b5d677e26f9.jpg";
import { Button } from "./ui/button";

export default function HeroSection(){
    return (
<div>
<div id="hero" className="hidden lg:flex flex-row justify-between items-center bg-[#eceada]">
  <div className="text-[#00492c] text-6xl font-bold flex flex-col ml-5 pl-5">
    <h1 className="text-3xl text-black font-bold">FALCONWOOD REALTY</h1>
    <h1 className="text-xl font-semibold pt-2 pb-2">We&#39;re more than just a real estate firm.</h1>
    <span>We are here to <br /> help you find <br /> your dream home.</span>
    <div className="pt-2"><a href="#contact-us"><Button>Contact Us</Button></a></div>
  </div>
  <div className=""><Image src={heroImage} alt="hero-image" className="h-182 w-190" priority={true}/></div>
</div>

{/* Mobile/Tablet Hero (only shows below lg) */}
<div className="lg:hidden flex flex-col bg-[#eceada] pt-20 pb-10 px-4 min-h-[80vh]">
  <div className="text-center">
    <h1 className="text-black text-2xl font-bold mb-2">FALCONWOOD REALTY</h1>
    <p className="text-[#00492c] text-base mb-6">We're more than just a real estate firm.</p>
    <h2 className="text-[#00492c] text-3xl font-bold mb-6 leading-snug">
      We are here to<br/>help you find<br/>your dream home.
    </h2>
    <Button className="px-6 py-2 text-base">
      Contact Us
    </Button>
  </div>
  <Image 
    src={heroImage} 
    alt="Mobile hero" 
    width={320}
    height={240}
    className="mt-8 w-full h-auto"
    priority
  />
</div>
</div>
    )
}