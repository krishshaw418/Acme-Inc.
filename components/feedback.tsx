import { Quote } from "lucide-react"

export default function FeedBack(){
    return (
        <div className="bg-[#eceada] flex flex-col items-center py-24 px-4">
            <div className="text-[#00492c] text-5xl font-bold mb-10 flex flex-col items-center">
                <h1>WHAT OUR CLIENT SAY</h1>
                <h1>ABOUT US ?</h1>
            </div>
            <div className="flex flex-row gap-10">
                <div className="bg-[#c1d0bd] pt-25 px-5 pb-10">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 size-15"/>
                    <p className="w-[320px] h-[150px]">
                        Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold pt-3 text-xl">- Ariadne Synder</h1>
                </div>
                <div className="bg-[#c1d0bd] pt-25 px-5 pb-10 relative">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1] mb-3 size-15"/>
                    <p className="w-[320px] h-[150px]">
                        Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold pt-3 text-xl">- Casper Berkley</h1>
                </div>
                <div className="bg-[#c1d0bd] pt-25 px-5 pb-10">
                    <Quote className="text-white fill-white scale-y-[-1] scale-x-[-1]
                    mb-3 size-15"/>
                    <p className="w-[320px] h-[150px]">
                        Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                    </p>
                    <h1 className="text-[#00492c] font-bold pt-3 text-xl">- Samuel Clinton</h1>
                </div>
            </div>
        </div>
    )
}