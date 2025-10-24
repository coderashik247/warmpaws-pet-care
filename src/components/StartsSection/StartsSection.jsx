import React from "react";
import { FaStethoscope, FaAward, FaUserTie, FaStore } from "react-icons/fa";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaStethoscope className="text-4xl mb-2" />,
      number: 3540,
      label: "SERVICE WE DONE",
    },
    {
      icon: <FaAward className="text-4xl mb-2" />,
      number: 1234,
      label: "OUR HAPPY CLIENTS",
    },
    {
      icon: <FaUserTie className="text-4xl mb-2" />,
      number: 2200,
      label: "TALENTED EMPLOYEES",
    },
    {
      icon: <FaStore className="text-4xl mb-2" />,
      number: 1234,
      label: "BRANCHES WE HAVE",
    },
  ];

  return (
    <div className="w-full 2xl:py-14 text-white ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-[#F8721F]">{item.icon}</div>
            <h3 className="text-5xl text-[#F8721F] font-bold mt-2 ">
              <CountUp
                start={0}
                end={item.number}
                duration={2.5}
                separator=","
                enableScrollSpy
              />
            </h3>

            <p className="text-sm font-medium uppercase tracking-wide text-[#F8721F] mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
