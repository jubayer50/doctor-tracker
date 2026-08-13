"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaArrowRight, FaUserMd, FaUsers } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#d5effb] via-white to-[#d5effb]/30">
      <div className="relative max-w-330 mx-auto px-4 py-20 md:py-26">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#005eb8]/10 text-[#005eb8] px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005eb8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005eb8]" />
              </span>
              Healthcare Management Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Manage Doctors &{" "}
              <span className="text-[#005eb8] relative">Patients</span> with
              Ease
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-lg">
              Streamline your healthcare practice with our comprehensive doctor
              and patient tracking system. Manage appointments, records, and
              analytics all in one place.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#d5effb] rounded-full">
                  <FaUserMd className="w-4 h-4 text-[#005eb8]" />
                </div>

                <div>
                  <span className="font-bold text-[#1a1a2e]">120+</span>
                  <span className="text-sm text-gray-500 ml-1">Doctors</span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#d5effb] rounded-full">
                  <FaUsers className="w-4 h-4 text-[#005eb8]" />
                </div>
                <div>
                  <span className="font-bold text-[#1a1a2e]">1.4K+</span>
                  <span className="text-sm text-gray-500 ml-1">Patients</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-2">
              <Button className="bg-[#005eb8] text-white hover:bg-[#003d7a] font-medium rounded-lg  transition-all duration-300">
                <FaArrowRight className="w-4 h-4" />
                Go to Dashboard
              </Button>

              <Button
                variant="bordered"
                className="border-2 border-[#005eb8] text-[#005eb8] hover:bg-[#d5effb]  font-medium rounded-lg transition-all duration-300"
              >
                <FaSearch className="w-4 h-4" />
                Browse Doctors
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe"
                  alt="Medical professionals"
                  className="rounded-xl object-cover object-top w-full h-100"
                  width={1000}
                  height={1000}
                />

                {/* Floating Card 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-md p-4 flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a1a2e]">
                      12 New Patients
                    </p>
                    <p className="text-xs text-gray-500">This week</p>
                  </div>
                </div>
                {/* Floating Card 2 */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-md p-4 flex items-center gap-3">
                  <div className="p-2 bg-[#d5effb] rounded-full">
                    <svg
                      className="w-5 h-5 text-[#005eb8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a1a2e]">
                      98% Satisfaction
                    </p>
                    <p className="text-xs text-gray-500">Patient rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
