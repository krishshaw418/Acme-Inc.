import Image from "next/image";
import carImage from "../public/directions_car_24dp_00492C_FILL0_wght400_GRAD0_opsz24.png";
import tubImage from "../public/bathtub_24dp_00492C_FILL0_wght400_GRAD0_opsz24.png";
import bedImage from "../public/hotel_24dp_00492C_FILL0_wght400_GRAD0_opsz24.png";

type PropertyDetails = {
  id: number;
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
      id: 1,
      name: "BELDEN",
      type: "TOWNHOUSE",
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
      image: "https://i.pinimg.com/736x/1e/39/8b/1e398b6177790c4592e427644e89bce1.jpg",
    },
    {
      id: 2,
      name: "BELDEN",
      type: "TOWNHOUSE",
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
      image: "https://i.pinimg.com/736x/1e/39/8b/1e398b6177790c4592e427644e89bce1.jpg",
    },
    {
      id: 3,
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
  <div className="lg:hidden bg-[#eceada] py-8 px-4">
  <h2 className="text-[#00492c] text-2xl font-bold mb-6 text-center">
    FEATURED LISTINGS
  </h2>
  
  <div className="space-y-6">
    {propertyList.map((property) => (
      <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
        <Image
          src={property.image}
          alt={property.name}
          width={350}
          height={200}
          className="w-full h-40 object-cover"
        />
        <div className="p-3">
          <h3 className="text-[#00492c] text-lg font-bold">{property.name}</h3>
          <p className="text-[#00492c] text-sm mb-2">{property.type}</p>
          <div className="flex flex-wrap gap-1">
            <span className="bg-[#c1d0bd] px-2 py-1 text-[#00492c] text-xs flex items-center">
              <Image src={bedImage} alt="Bed" width={12} height={12} className="mr-1"/> 
              {property.bedrooms} Beds
            </span>
            {/* Repeat for other amenities */}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  );
}
