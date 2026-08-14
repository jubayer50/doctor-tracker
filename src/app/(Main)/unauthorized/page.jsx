import { Button } from "@heroui/react";
import Link from "next/link";
import { FaExclamationTriangle, FaHome, FaSignInAlt } from "react-icons/fa";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d5effb50] px-4">
      <div className="text-center">
        {/* Icon */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
            <FaExclamationTriangle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-3">
          401
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">
          Unauthorized Access
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
          You don`t have permission to access this page. Please sign in with the
          appropriate credentials to continue.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={"/signin"}>
            <Button className="bg-[#005eb8] text-white hover:bg-[#003d7a]  font-medium rounded-lg shadow hover:shadow-md transition-all duration-300">
              <FaSignInAlt className="w-4 h-4" />
              Sign In
            </Button>
          </Link>

          <Link href={"/"}>
            <Button
              variant="bordered"
              className="border-2 border-[#005eb8] text-[#005eb8] hover:bg-[#d5effb]  font-medium rounded-lg transition-all duration-300"
            >
              <FaHome className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            Need help?{" "}
            <Link
              href="#"
              className="text-[#005eb8] hover:underline font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
