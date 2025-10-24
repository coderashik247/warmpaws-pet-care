import React from 'react';

const TipCard = ({tip}) => {
return (
  <div
    className="w-full mx-auto animate__animated animate__fadeInUp hover:scale-105 transition-transform duration-500 "
    data-aos="zoom-in"
  >
    <div className="group h-full rounded-2xl shadow-lg bg-base-200 p-6 transition-all duration-500 hover:bg-[#F6F2ED] flex flex-col justify-between object-cover">
      {/* Icon */}
      <div className="flex justify-center items-center bg-white rounded-full w-28 md:w-40 h-28 md:h-40 mx-auto mb-4">
        <img
          className="transition-transform duration-700 group-hover:rotate-360 w-20 md:w-30 h-20 md:h-30 "
          src={tip.image}
          alt=""
        />
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold text-center mb-2  transition-colors duration-500">
        {tip.title}
      </h2>

      {/* Description */}
      <p className="text-center text-gray-500 text-sm  md:text-lg mb-4  transition-colors duration-500">
        {tip.description}
      </p>

      {/* Button */}
      <div className="mt-4 text-center">
        <button className="btn w-full bg-[#f8721fc3] text-white hover:bg-orange-600 hover:text-white rounded-full px-3 md:px-6 transition-all duration-500">
          Book Now
        </button>
      </div>
    </div>
  </div>
);
};

export default TipCard;