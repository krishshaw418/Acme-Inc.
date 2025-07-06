import { Quote } from "lucide-react"

export default function FeedBack(){
    return (
        <div id="feedback" className="bg-[#eceada] flex flex-col items-center py-12 md:py-24 px-4">
            <div className="text-[#00492c] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 flex flex-col items-center text-center">
                <h1>WHAT OUR CLIENT SAY</h1>
                <h1>ABOUT US ?</h1>
            </div>
            
            {/* Desktop and Tablet Layout */}
            <div className="hidden md:flex flex-row gap-6 lg:gap-10 max-w-7xl">
                <div className="bg-[#c1d0bd] pt-8 lg:pt-10 px-5 pb-10 flex-1 min-w-0">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 w-12 h-12 lg:w-15 lg:h-15"/>
                    <p className="text-sm lg:text-base leading-relaxed mb-4 min-h-[120px] lg:min-h-[150px]">
                        Boost your product and service&#39;s credibility by adding testimonials from your clients. People love recommendations so feedback from others who&#39;ve tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold text-lg lg:text-xl">- Ariadne Synder</h1>
                </div>
                <div className="bg-[#c1d0bd] pt-8 lg:pt-10 px-5 pb-10 flex-1 min-w-0">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 w-12 h-12 lg:w-15 lg:h-15"/>
                    <p className="text-sm lg:text-base leading-relaxed mb-4 min-h-[120px] lg:min-h-[150px]">
                        Boost your product and service&#39;s credibility by adding testimonials from your clients. People love recommendations so feedback from others who&#39;ve tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold text-lg lg:text-xl">- Casper Berkley</h1>
                </div>
                <div className="bg-[#c1d0bd] pt-8 lg:pt-10 px-5 pb-10 flex-1 min-w-0">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 w-12 h-12 lg:w-15 lg:h-15"/>
                    <p className="text-sm lg:text-base leading-relaxed mb-4 min-h-[120px] lg:min-h-[150px]">
                        Boost your product and service&#39;s credibility by adding testimonials from your clients. People love recommendations so feedback from others who&#39;ve tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold text-lg lg:text-xl">- Samuel Clinton</h1>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col gap-6 w-full max-w-sm">
                <div className="bg-[#c1d0bd] pt-6 px-5 pb-8">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 w-10 h-10"/>
                    <p className="text-sm leading-relaxed mb-4">
                        Boost your product and service&#39;s credibility by adding testimonials from your clients. People love recommendations so feedback from others who&#39;ve tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold text-lg">- Ariadne Synder</h1>
                </div>
                <div className="bg-[#c1d0bd] pt-6 px-5 pb-8">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 w-10 h-10"/>
                    <p className="text-sm leading-relaxed mb-4">
                        Boost your product and service&#39;s credibility by adding testimonials from your clients. People love recommendations so feedback from others who&#39;ve tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold text-lg">- Casper Berkley</h1>
                </div>
                <div className="bg-[#c1d0bd] pt-6 px-5 pb-8">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 w-10 h-10"/>
                    <p className="text-sm leading-relaxed mb-4">
                        Boost your product and service&#39;s credibility by adding testimonials from your clients. People love recommendations so feedback from others who&#39;ve tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold text-lg">- Samuel Clinton</h1>
                </div>
            </div>
        </div>
    )
}