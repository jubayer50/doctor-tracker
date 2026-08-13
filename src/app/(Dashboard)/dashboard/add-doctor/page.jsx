"use client";

import { uploadImage } from "@/lib/uploadImage";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { TfiUpload } from "react-icons/tfi";

const AddDoctor = () => {
  const [imgPreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const previewImageUrl = URL.createObjectURL(file);
    setImagePreview(previewImageUrl);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const doctorData = Object.fromEntries(formData.entries());

    const imageHostUrl = await uploadImage(doctorData.image);

    const updateDoctorData = { ...doctorData, image: imageHostUrl };
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold text-[#005eb8]">Add a doctor</h2>

      <div className="mt-6">
        <Form
          onSubmit={onSubmit}
          className="max-w-180 p-3 md:p-6 rounded-lg space-y-6 border border-[#a9dbf1]"
        >
          <TextField isRequired name="doctor_name" type="text">
            <Label>Doctor Name</Label>
            <Input
              placeholder="Enter doctor name"
              className={
                "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
              }
            />
          </TextField>

          <TextField isRequired name="specialization" type="text">
            <Label>Doctor`s Specialization</Label>
            <Input
              placeholder="Enter doctor's specialization"
              className={
                "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
              }
            />
          </TextField>

          <TextField isRequired name="hospital" type="text">
            <Label>Doctor`s Hospital Name</Label>
            <Input
              placeholder="Enter doctor's hospital name"
              className={
                "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
              }
            />
          </TextField>

          <TextField isRequired name="phone" type="text">
            <Label>Doctor`s Phone Number</Label>
            <Input
              placeholder="Enter doctor phone"
              className={
                "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
              }
            />
          </TextField>

          <TextField isRequired name="email" type="text">
            <Label>Doctor`s Email Number</Label>
            <Input
              placeholder="Enter doctor email"
              className={
                "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
              }
            />
          </TextField>

          <div>
            <div className="flex items-center gap-6">
              <Label
                htmlFor="image"
                className="w-16 h-16 border border-[#005eb850] rounded-md flex items-center justify-center"
              >
                {imgPreview ? (
                  <Image
                    src={imgPreview}
                    alt="Icon"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center"
                  ></Image>
                ) : (
                  <TfiUpload className="w-6 h-6" />
                )}

                <Input
                  name="image"
                  id="image"
                  type="file"
                  accept="image/**"
                  onChange={handleImageChange}
                  className={"hidden"}
                />
              </Label>

              <div>
                <p>Upload Doctor Image</p>
                <p>JPEG or PNG</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className={"bg-[#005eb8] rounded-md"}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddDoctor;
