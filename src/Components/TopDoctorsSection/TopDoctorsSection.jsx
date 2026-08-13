"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowRight } from "react-icons/fa";
import { PiHospital } from "react-icons/pi";

const TopDoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      hospital: "City Medical Center",

      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Neurologist",
      hospital: "Apollo Hospital",

      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Dr. Emily Williams",
      specialization: "Pediatrician",
      hospital: "Children's Health Center",

      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-330 mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <span className="text-[#005eb8] text-sm font-semibold uppercase tracking-wider">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mt-1">
              Top <span className="text-[#005eb8]">Doctors</span>
            </h2>
          </div>

          <Link href={"/all-doctors"}>
            <Button
              variant="light"
              className="text-[#005eb8] font-medium hover:bg-[#d5effb] mt-3 sm:mt-0"
            >
              <FaArrowRight className="w-4 h-4" />
              View All
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-[#d5effb] rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100/80 "
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-104 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl group-hover:text-[#003d7a] font-bold text-[#1a1a2e] mb-0.5 transition-all duration-300">
                  {doctor.name}
                </h3>
                <p className="text-[#005eb8] font-semibold text-sm mb-3">
                  {doctor.specialization}
                </p>

                <div className="flex items-center gap-3 text-[#003d7a] ">
                  <PiHospital className="w-5 h-5" />
                  <p className="text-sm">{doctor.hospital}</p>
                </div>

                <div className="mt-5">
                  <Button className="w-full bg-[#005eb8] text-white hover:bg-[#003d7a] font-medium rounded-xl transition-all duration-300">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDoctorsSection;
