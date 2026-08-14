import { Spinner } from "@heroui/react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <Spinner className="text-[#005eb8]" />
      </div>
    </div>
  );
};

export default LoadingPage;
