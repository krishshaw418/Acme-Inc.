import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import TeamSection from "@/components/team";
import FeaturedList from "@/components/featuredlist";
import WorkWithUsSection from "@/components/workwithus";
import FeedBack from "@/components/feedback";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <TeamSection/>
      <FeaturedList/>
      <WorkWithUsSection/>
      <FeedBack/>
      <Footer/>
    </div>
  );
}
