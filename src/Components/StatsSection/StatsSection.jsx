"use client";

import { FaUserMd, FaUsers, FaHospital, FaCalendarCheck } from "react-icons/fa";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { getStats } from "@/lib/api/stats.js";

const StatsSection = ({ className }) => {
  const [statsData, setStatsData] = useState({});

  useEffect(() => {
    const getStatsData = async () => {
      const data = await getStats();
      setStatsData(data);
    };

    getStatsData();
  }, []);

  const stats = [
    {
      icon: <FaUserMd className="w-6 h-6 text-[#005eb8]" />,
      value: statsData?.totalDoctors,
      suffix: "+",
      label: "Total Doctors",
      color: "bg-[#d5effb]",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-[#005eb8]" />,
      value: statsData?.totalPatients,
      suffix: "+",
      label: "Total Patients",
      color: "bg-[#d5effb]",
    },
    {
      icon: <FaHospital className="w-6 h-6 text-[#005eb8]" />,
      value: 25,
      suffix: "",
      label: "Partner Hospitals",
      color: "bg-[#d5effb]",
    },
    {
      icon: <FaCalendarCheck className="w-6 h-6 text-[#005eb8]" />,
      value: 723,
      suffix: "+",
      label: "Appointments",
      color: "bg-[#d5effb]",
    },
  ];

  return (
    <section className={`py-16 bg-[#d5effb] ${className}`}>
      <div className="max-w-330 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gray-50/80 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 border border-gray-100/80 "
            >
              <div
                className={`${stat.color} w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 `}
              >
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                <CountUp end={stat.value} duration={2.5} /> {stat.suffix}
              </h3>
              <p className="text-sm text-gray-500 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
