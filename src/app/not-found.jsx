import { Button } from "@heroui/react";
import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d5effb50]">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-[#005eb8] select-none">
            404
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Oops! The page you`re looking for doesn`t exist or has been moved.
          Let`s get you back on track.
        </p>

        <div className="flex items-center justify-center gap-5">
          <Button className="bg-[#005eb8] text-white hover:bg-[#003d7a]  font-medium rounded-lg shadow hover:shadow-md transition-all duration-300">
            <FaHome className="w-4 h-4" />
            Go Home
          </Button>

          <Button
            variant="bordered"
            className="border-2 border-[#005eb8] text-[#005eb8] hover:bg-[#d5effb] font-medium rounded-lg transition-all duration-300"
          >
            <FaArrowLeft className="w-4 h-4" />
            Browse Doctors
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Looking for something specific?{" "}
            <Link
              href="/all-doctors"
              className="text-[#005eb8] hover:underline font-medium"
            >
              Search Doctors
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
