export default function Footer(){
    return(
<div className="bg-[#00492c] text-white p-25">
  {/* Original Large Screen Footer (unchanged) */}
  <div className="hidden lg:flex flex-row justify-between items-center">
    <div className="text-7xl font-bold">FALCONWOOD REALTY</div>
    <div className="flex flex-col">
      <div className="text-xl mb-4">QUICK LINKS</div>
      <div className="flex flex-col gap-2">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#featured" className="hover:underline">Listings</a>
        <a href="#team" className="hover:underline">Our Team</a>
        <a href="#contact-us" className="hover:underline">Contact</a>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="text-xl mb-4">CONTACT</div>
      <div className="flex flex-col gap-2">
        <div>123 Main Street</div>
        <div>New York, NY 10001</div>
        <div>(123) 456-7890</div>
        <div>info@falconwoodrealty.com</div>
      </div>
    </div>
  </div>

  {/* Mobile/Tablet Footer (only shows below lg) */}
  <div className="lg:hidden flex flex-col gap-12 p-10">
    <div className="text-4xl md:text-5xl font-bold text-center">FALCONWOOD REALTY</div>
    
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center">
      <div className="flex flex-col items-center md:items-start">
        <div className="text-lg md:text-xl mb-4 font-semibold">QUICK LINKS</div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#featured" className="hover:underline">Listings</a>
          <a href="#team" className="hover:underline">Our Team</a>
          <a href="#contact-us" className="hover:underline">Contact</a>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-start">
        <div className="text-lg md:text-xl mb-4 font-semibold">CONTACT</div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div>123 Main Street</div>
          <div>New York, NY 10001</div>
          <div>(123) 456-7890</div>
          <div>info@falconwoodrealty.com</div>
        </div>
      </div>
    </div>
    
    <div className="text-center text-sm mt-8">
      © {new Date().getFullYear()} Falconwood Realty. All rights reserved.
    </div>
  </div>
</div>
    )
}