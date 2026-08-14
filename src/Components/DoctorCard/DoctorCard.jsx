import { Button } from "@heroui/react";
import Image from "next/image";
import { PiHospital } from "react-icons/pi";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="group bg-[#d5effb] rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100/80 ">
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
  );
};

export default DoctorCard;
