export default function Footer(){
    return(
<div id="contact-us" className="bg-[#00492c] text-white p-25">
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
  <div className="lg:hidden bg-[#00492c] text-white py-12 px-6">
  {/* Logo */}
  <h2 className="text-3xl font-bold text-center mb-8">FALCONWOOD REALTY</h2>

  {/* Links - Stacked */}
  <div className="space-y-8">
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
      <div className="flex flex-col gap-2">
        <a href="#hero" className="text-sm hover:underline">Home</a>
        <a href="#listings" className="text-sm hover:underline">Properties</a>
        <a href="#team" className="text-sm hover:underline">Our Team</a>
        <a href="#contact" className="text-sm hover:underline">Contact</a>
      </div>
    </div>

    {/* Contact Info */}
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-3">CONTACT US</h3>
      <div className="flex flex-col gap-2 text-sm">
        <p>123 Main Street, New York</p>
        <p>(123) 456-7890</p>
        <p>hello@falconwood.com</p>
      </div>
    </div>

    {/* Social Icons */}
    {/* <div className="flex justify-center gap-4 pt-4">
      <a href="#" aria-label="Facebook">
        <FacebookIcon className="size-5" />
      </a>
      <a href="#" aria-label="Twitter">
        <TwitterIcon className="size-5" />
      </a>
      <a href="#" aria-label="Instagram">
        <InstagramIcon className="size-5" />
      </a>
    </div> */}
  </div>

  {/* Copyright */}
  <p className="text-xs text-center mt-10 opacity-80">
    © {new Date().getFullYear()} Falconwood Realty. All rights reserved.
  </p>
</div>
</div>
    )
}