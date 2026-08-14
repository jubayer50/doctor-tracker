"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import DoctorCard from "../DoctorCard/DoctorCard";

const TopDoctorsSection = () => {
  const doctors = [
    {
      doctor_name: "Dr. Sarah Johnson",
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
            <DoctorCard key={index} doctor={doctor}></DoctorCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDoctorsSection;
