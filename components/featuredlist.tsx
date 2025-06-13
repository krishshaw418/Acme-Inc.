import Image from "next/image";
import carImage from "../public/directions_car_24dp_00492C_FILL0_wght400_GRAD0_opsz24.png";
import tubImage from "../public/bathtub_24dp_00492C_FILL0_wght400_GRAD0_opsz24.png";
import bedImage from "../public/hotel_24dp_00492C_FILL0_wght400_GRAD0_opsz24.png";

type PropertyDetails = {
  name: string;
  type: string;
  bedrooms: number;
  parkings: number;
  bathrooms: number;
  image: string;
};

export default function FeaturedList() {
  const propertyList: PropertyDetails[] = [
    {
      name: "BELDEN",
      type: "TOWNHOUSE",
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
      image: "https://i.pinimg.com/736x/1e/39/8b/1e398b6177790c4592e427644e89bce1.jpg",
    },
    {
      name: "BELDEN",
      type: "TOWNHOUSE",
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
      image: "https://i.pinimg.com/736x/1e/39/8b/1e398b6177790c4592e427644e89bce1.jpg",
    },
    {
      name: "BELDEN",
      type: "TOWNHOUSE",
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
      image: "https://i.pinimg.com/736x/1e/39/8b/1e398b6177790c4592e427644e89bce1.jpg",
    },
  ];

  return (
  <div id="featured" className="bg-[#eceada] flex flex-col items-center py-28 px-4">
  <div className="text-[#00492c] text-5xl font-bold mb-8">
    FEATURED LISTINGS
  </div>

  {/* Original large screen layout preserved */}
  <div className="hidden lg:flex flex-row gap-5 p-0">
    {propertyList.map((property, index) => (
      <div key={index} className="flex flex-col items-start">
        <Image 
          src={property.image} 
          alt="property-image"
          width={450}
          height={0}
          className="px-5"
        />
        <div className="px-5 py-2">
          <h1 className="text-[#00492c] text-[20px] font-medium">{property.type}</h1>
          <h1 className="text-[#00492c] font-bold text-4xl">{property.name}</h1>
          <div className="flex flex-row gap-2 py-2">
            <span className="bg-[#c1d0bd] px-2 py-1 text-[#00492c] flex flex-row gap-1 items-center">
              <Image src={bedImage} alt="tub-image" className="size-5"/> {property.bedrooms} Beds
            </span>
            <span className="bg-[#c1d0bd] px-2 py-1 text-[#00492c] flex flex-row gap-1 items-center">
              <Image src={tubImage} alt="tub-image" className="size-5"/> {property.bathrooms} Baths
            </span>
            <span className="bg-[#c1d0bd] px-2 py-1 text-[#00492c] flex flex-row gap-1 items-center">
              <Image src={carImage} alt="car-image" className="size-5"/> {property.parkings} Cars
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Mobile/Tablet responsive layout (only shows on screens < lg) */}
  <div className="lg:hidden w-full max-w-md mx-auto">
    {propertyList.map((property, index) => (
      <div key={index} className="mb-10 last:mb-0">
        <Image 
          src={property.image} 
          alt="property-image"
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div className="px-5 py-4 bg-white rounded-b-lg shadow-sm">
          <h1 className="text-[#00492c] text-lg font-medium">{property.type}</h1>
          <h1 className="text-[#00492c] font-bold text-2xl">{property.name}</h1>
          <div className="flex flex-wrap gap-2 py-2">
            <span className="bg-[#c1d0bd] px-2 py-1 text-[#00492c] flex flex-row gap-1 items-center text-sm">
              <Image src={bedImage} alt="bed-image" className="size-4"/> 
              {property.bedrooms} Beds
            </span>
            <span className="bg-[#c1d0bd] px-2 py-1 text-[#00492c] flex flex-row gap-1 items-center text-sm">
              <Image src={tubImage} alt="tub-image" className="size-4"/> 
              {property.bathrooms} Baths
            </span>
            <span className="bg-[#c1d0bd] px-2 py-1 text-[#00492c] flex flex-row gap-1 items-center text-sm">
              <Image src={carImage} alt="car-image" className="size-4"/> 
              {property.parkings} Cars
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
