import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <HeroSection/>
      <TeamSection/>
    </div>
  );
}
