import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSolidCategoryAlt, BiSolidRename } from "react-icons/bi";
import { FaCheckToSlot } from "react-icons/fa6";
import { MdOutlineMailLock } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useLoaderData, useNavigate, useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const petsData = useLoaderData();
  const [pet, setPet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const singlePet = petsData.find((pet) => pet.serviceId == serviceId);
    setPet(singlePet);
  }, [serviceId, petsData]);
  const handleBookNow = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    toast.success(
      <div>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>is booking now</p>
      </div>,
      { duration: 3000 }
    );
    event.target.reset();
  };
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 pt-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
            <span
              className="block mb-2 text-lg text-[#F8721F] animate__animated animate__rubberBand"
              style={{ animationDuration: "5s" }}
            >
              WarmPaws – <span className="fontPacifico text-2xl ">Pet</span>{" "}
              Care Service Center
            </span>
            <h1
              className="text-6xl fontBricolage font-extrabold dark:text-gray-700 animate__animated animate__heartBeat"
              style={{ animationDuration: "5s" }}
            >
              {pet.serviceName}
            </h1>
            <p className="my-8">
              <span className="font-medium text-lg fontBricolage text-[#F8721F]">
                WarmPaws Pet Care -
              </span>{" "}
              {pet.description}
            </p>
            <div className="border-2 border-[#F8721F] rounded-xl space-y-2">
              <p className="text-3xl font-bold fontBricolage">Provider</p>
              <h2 className="flex justify-center items-center gap-1 text-xl">
                <BiSolidRename size={25} color="#F8721F" /> {pet.providerName}{" "}
              </h2>
              <h2 className="flex justify-center items-center gap-1 text-xl">
                <MdOutlineMailLock size={25} color="#F8721F" />{" "}
                {pet.providerEmail}{" "}
              </h2>
            </div>
            <div className="flex justify-between my-5">
              <span className="bg-[#f8721fd7] group-hover:bg-[#f8721fd0] px-2 py-1 rounded-lg text-white font-semibold">
                Rating - {pet.rating}{" "}
              </span>
              <span className="bg-[#f8721fd7] group-hover:bg-[#f8721fd0] px-2 py-1 rounded-lg text-white font-semibold">
                Price - {pet.price}{" "}
              </span>
            </div>
            <div>
              <section className="p-6 my-6 dark:bg-[#f8721f29] dark:text-gray-800 rounded-xl">
                <div className="container flex justify-between gap-6">
                  <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#F8721F]">
                      <FaCheckToSlot size={25} color="white" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                      <p className="text-xl font-semibold leading-none">
                        {" "}
                        {pet.slotsAvailable}{" "}
                      </p>
                      <p className="capitalize text-sm">Available</p>
                    </div>
                  </div>
                  <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-[#F8721F]">
                      <BiSolidCategoryAlt size={25} color="white" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                      <p className="text-xl font-semibold leading-none">
                        {pet.category}
                      </p>
                      <p className="capitalize text-sm">Category</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <img
            src={pet.image}
            alt=""
            className="object-cover w-full h-[700px] rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
        <div>
          <h2
            className="text-center my-10 text-7xl font-bold fontPacifico text-[#F8721F] animate__animated animate__flip"
            style={{ animationDuration: "5s" }}
          >
            Paw-sitively Book!
          </h2>
          <form
            onSubmit={handleBookNow}
            className="self-stretch space-y-3 w-3/6 mx-auto"
          >
            <div>
              <label htmlFor="name" className="text-sm sr-only">
                Your name
              </label>
              <input
              required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full py-3 px-2 border-2  rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div>
              <label className="text-sm sr-only">Email address</label>
              <input
              required
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-md focus:ring border-2 py-3 px-2 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-semibold rounded dark:bg-[#F8721F] dark:text-gray-50"
            >
              Book Now
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center py-5 md:py-10">
          <a
            onClick={() => navigate(-1)}
            target="_blank"
            style={{
              background:
                "linear-gradient(125.07deg, rgba(248,114,31,1), rgba(255,160,0,1) 100%)",
            }}
            className="py-1 px-2 lg:px-6 text-lg text-white font-semibold border rounded-lg flex justify-center items-center gap-2 hover:cursor-pointer hover:scale-105"
          >
            <RiArrowGoBackLine /> Go Back
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
