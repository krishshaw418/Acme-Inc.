import Image from "next/image";
import heroImage from "../public/869d950569d47622991d2b5d677e26f9.jpg";
import { Button } from "./ui/button";

export default function HeroSection(){
    return (
        <div className="flex flex-row justify-between items-center">
        <div className="text-[#00492c] text-6xl font-bold flex flex-col ml-5 pl-5">
          <h1 className="text-3xl text-black font-bold">FALCONWOOD REALTY</h1><br />
          <h1 className="text-xl font-semibold pt-2 pb-2">We're more than just a real estate firm.</h1>
          <span>
            We are here to <br /> help you find <br /> your dream home.
          </span>
          <div className="pt-2"><Button>Contact Us</Button></div>
        </div>
        <div className=""><Image src={heroImage} alt="hero-image" className="h-182" priority={true}></Image></div>
        </div>
    )
}