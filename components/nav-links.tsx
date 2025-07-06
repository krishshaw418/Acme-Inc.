"use client"

export function OurTeams(){
    return (
        <a 
            href="#team" 
            className="block text-white font-medium hover:text-gray-300 transition-colors"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
        >
            Our Team
        </a>
    )
}

export function FeaturedList(){
    return (
        <a 
            href="#featuredlist" 
            className="block text-white font-medium hover:text-gray-300 transition-colors"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
        >
            Featured List
        </a>
    )
}

export function Experience(){
    return (
        <a 
            href="#experience" 
            className="block text-white font-medium hover:text-gray-300 transition-colors"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
        >
            Experience
        </a>
    )
}

export function FeedBack(){
    return (
        <a 
            href="#feedback" 
            className="block text-white font-medium hover:text-gray-300 transition-colors"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
        >
            Feedback
        </a>
    )
}

export function ContactUs(){
    return(
        <a href="#contact-us"
            className="block text-white font-medium hover:text-gray-300 transition-colors"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
        >
            Contact Us
        </a>
    )
}