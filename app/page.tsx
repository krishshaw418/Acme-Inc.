import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import TeamSection from "@/components/team";
import FeaturedList from "@/components/featuredlist";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <HeroSection/>
      <TeamSection/>
      <FeaturedList/>
    </div>
  );
}
