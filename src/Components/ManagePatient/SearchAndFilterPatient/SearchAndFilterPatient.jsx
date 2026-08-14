"use client";

import { SearchField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchAndFilterPatient = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    router.push(`/dashboard/patients-management?${params.toString()}`);
  }, [search, router]);

  return (
    <div>
      <SearchField name="search" onChange={setSearch} className={""}>
        <SearchField.Group className={"rounded-md shadow-none"}>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </div>
  );
};

export default SearchAndFilterPatient;
