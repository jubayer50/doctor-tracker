"use client";

import { ListBox, SearchField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchAndFilter = ({ url }) => {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }
    if (specialization) {
      params.set("specialization", specialization);
    }

    router.push(`${url}?${params.toString()}`);
  }, [search, specialization, router, url]);

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5">
      <div className="flex-1 w-full">
        <SearchField name="search" onChange={setSearch} className={""}>
          <SearchField.Group className={"rounded-md shadow-none"}>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      <div className="flex-1 w-full">
        <Select
          className="w-full"
          placeholder="Select one"
          onChange={(value) => setSpecialization(value)}
        >
          <Select.Trigger className={"rounded-md shadow-none w-full"}>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover className={"rounded-md"}>
            <ListBox>
              <ListBox.Item id="urologist" textValue="Urologist">
                Urologist
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="oncologist" textValue="Oncologist">
                Oncologist
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="gynecologist" textValue="Gynecologist">
                Gynecologist
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="pediatrician" textValue="Pediatrician">
                Pediatrician
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item
                id="orthopedic-surgeon"
                textValue="Orthopedic Surgeon"
              >
                Orthopedic Surgeon
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="dermatologist" textValue="Dermatologist">
                Dermatologist
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="neurologis" textValue="Neurologis">
                Neurologis
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="cardiologist" textValue="Cardiologist">
                Cardiologist
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
