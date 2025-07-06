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
    <div id="featuredlist" className="bg-[#eceada] flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-[#00492c] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
        FEATURED LISTINGS
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl w-full">
        {propertyList.map((property, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Property Image */}
            <div className="w-full relative overflow-hidden">
              <Image 
                src={property.image} 
                alt={`${property.name} property image`}
                width={450}
                height={300}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            {/* Property Details */}
            <div className="p-4 sm:p-5 md:p-6 w-full">
              <h3 className="text-[#00492c] text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2">
                {property.type}
              </h3>
              <h2 className="text-[#00492c] font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                {property.name}
              </h2>
              
              {/* Property Features */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <span className="bg-[#c1d0bd] px-2 sm:px-3 py-1 sm:py-2 text-[#00492c] flex flex-row gap-1 sm:gap-2 items-center text-sm sm:text-base rounded-md">
                  <Image src={bedImage} alt="bedroom icon" className="size-4 sm:size-5" />
                  <span className="font-medium">{property.bedrooms} Beds</span>
                </span>
                <span className="bg-[#c1d0bd] px-2 sm:px-3 py-1 sm:py-2 text-[#00492c] flex flex-row gap-1 sm:gap-2 items-center text-sm sm:text-base rounded-md">
                  <Image src={tubImage} alt="bathroom icon" className="size-4 sm:size-5" />
                  <span className="font-medium">{property.bathrooms} Baths</span>
                </span>
                <span className="bg-[#c1d0bd] px-2 sm:px-3 py-1 sm:py-2 text-[#00492c] flex flex-row gap-1 sm:gap-2 items-center text-sm sm:text-base rounded-md">
                  <Image src={carImage} alt="parking icon" className="size-4 sm:size-5" />
                  <span className="font-medium">{property.parkings} Cars</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button - Optional */}
      {/* <div className="mt-8 sm:mt-10 md:mt-12">
        <button className="bg-[#00492c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-[#00492c]/90 transition-colors duration-200">
          View All Properties
        </button>
      </div> */}
    </div>
  );
}