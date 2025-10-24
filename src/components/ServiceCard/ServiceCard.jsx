import { Link } from "react-router";

const ServiceCard = ({ data }) => {
  console.log(typeof data); //object
  return (
    <div className="px-2 md:px-0">
      <h2 className="text-3xl md:text-6xl fontBricolage font-bold text-center mb-3 md:mb-10 animate__animated animate__backInDown mt-10">
        {" "}
        <span className="text-[#F8721F] fontPacifico">Pets</span> Winter Care
        Services
      </h2>
      <p className="text-justify md:text-center text-sm md:text-xl text-gray-500 mb-8">
        Our Pets Winter Care Services are designed to keep your furry friends
        safe, warm, and healthy during the chilly months. We offer cozy winter
        clothing like jackets and sweaters, tailored to pets of all sizes, along
        with grooming and paw protection treatments to prevent skin and paw
        issues caused by cold weather. Our team provides expert advice on
        nutrition and supplements to strengthen immunity and keep pets active
        and energetic.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((pet) => {
          return (
            <>
              <div
                className="relative h-[400px] md:h-[650px] rounded-3xl overflow-hidden shadow-md group "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {/* Background Image */}
                <img
                  src={pet.image}
                  alt={pet.serviceName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Text Content */}
                <div
                  className="absolute bottom-6 left-6 right-6 text-white p-2.5 transition-transform duration-500 ease-in-out
                group-hover:-translate-y-5 group-hover:bg-stone-50 group-hover:rounded-xl "
                >
                  <h3 className="text-xl md:text-3xl font-semibold mb-2 fontBricolage group-hover:text-gray-600">
                    {pet.serviceName}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 group-hover:text-gray-400 leading-snug mb-3">
                    {pet.description}
                  </p>
                  <div className="flex justify-between">
                    <span className="bg-[#f8721f9e] group-hover:bg-[#f8721fd0]  px-1 rounded-lg">
                      Rating - {pet.rating}{" "}
                    </span>
                    <span className="bg-[#f8721f9e] group-hover:bg-[#f8721fd0] px-1 rounded-lg">
                      Price - {pet.price}{" "}
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-2 md:mt-0">
                    <Link
                      to={`/services/${pet.serviceId}`}
                      className="px-3 md:px-5 py-1 md:py-2 bg-[#f8721f] rounded-lg font-semibold group-hover:cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
