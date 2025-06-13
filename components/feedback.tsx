import { Quote } from "lucide-react"

export default function FeedBack(){
    return (
<div className="bg-[#eceada] flex flex-col items-center py-12 md:py-24 px-4">
  {/* Title - Responsive sizing */}
  <div className="text-[#00492c] text-3xl md:text-5xl font-bold mb-8 md:mb-10 flex flex-col items-center">
    <h1>WHAT OUR CLIENT SAY</h1>
    <h1>ABOUT US ?</h1>
  </div>

  {/* Original Large Screen Layout (preserved exactly) */}
  <div className="hidden lg:flex flex-row gap-10">
    {[
      { name: "Ariadne Synder" },
      { name: "Casper Berkley" },
      { name: "Samuel Clinton" }
    ].map((client, index) => (
      <div key={index} className="bg-[#c1d0bd] pt-25 px-5 pb-10">
        <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 size-15"/>
        <p className="w-[320px] h-[150px]">
          Boost your product and service&#39;s credibility by adding testimonials from your clients. 
          People love recommendations so feedback from others who&#39;ve tried it is invaluable.
        </p>
        <h1 className="text-[#00492c] font-bold pt-3 text-xl">- {client.name}</h1>
      </div>
    ))}
  </div>

  {/* Tablet Layout (shows on md and lg screens) */}
  <div className="hidden md:flex lg:hidden gap-6 w-full max-w-4xl mx-auto">
    {[
      { name: "Ariadne Synder" },
      { name: "Casper Berkley" }
    ].map((client, index) => (
      <div key={index} className="bg-[#c1d0bd] pt-20 px-4 pb-8 flex-1">
        <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 size-12"/>
        <p className="h-[120px]">
          Boost your product and service&#39;s credibility by adding testimonials from your clients. 
          People love recommendations so feedback from others who&#39;ve tried it is invaluable.
        </p>
        <h1 className="text-[#00492c] font-bold pt-3 text-lg">- {client.name}</h1>
      </div>
    ))}
  </div>

  {/* Mobile Layout (shows on sm screens) */}
  <div className="lg:hidden bg-[#eceada] py-8 px-4">
  <h2 className="text-[#00492c] text-2xl font-bold mb-6 text-center">
    CLIENT TESTIMONIALS
  </h2>
  
  <div className="bg-[#c1d0bd] p-4 rounded-lg">
    <Quote className="text-white size-5 mb-2 mx-auto"/>
    <p className="text-[#00492c] text-sm text-center mb-4">
      "Boost your product and service's credibility by adding testimonials from your clients."
    </p>
    <p className="text-[#00492c] font-bold text-center">- Ariadne Snyder</p>
    
    {/* Dot indicators */}
    <div className="flex justify-center gap-2 mt-4">
      {[1, 2, 3].map((dot) => (
        <div key={dot} className={`w-2 h-2 rounded-full ${dot === 1 ? 'bg-[#00492c]' : 'bg-[#00492c]/30'}`}></div>
      ))}
    </div>
  </div>
</div>
</div>
    )
}