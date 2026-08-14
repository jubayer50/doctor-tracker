"use client";

import { updatePatient } from "@/lib/action/updatePatientData";
import { uploadImage } from "@/lib/uploadImage.js";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TfiUpload } from "react-icons/tfi";

const EditPatient = ({ patient }) => {
  const [imgPreview, setImagePreview] = useState("");

  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const previewImageUrl = URL.createObjectURL(file);
    setImagePreview(previewImageUrl);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const patientData = Object.fromEntries(formData.entries());

    // get the image from update input
    const imageFile = formData.get("image");

    // old image
    let finalImage = patient.image;

    // now update
    if (imageFile && imageFile.size > 0) {
      const hostUrl = await uploadImage(imageFile);
      finalImage = hostUrl;
    }

    const newPatientData = {
      ...patientData,
      image: finalImage,
    };

    const result = await updatePatient(patient._id, newPatientData);

    if (result.modifiedCount) {
      toast.success("Patient data successfully updated!");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button size="sm" className={"rounded-md"}>
        Edit Patient
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="rounded-lg max-w-150">
            <Modal.CloseTrigger />
            <Modal.Header className="">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegEdit className="w-5 h-5" />
              </Modal.Icon>

              <Modal.Heading className="text-xl text-[#005eb8]">
                Edit Patient
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-3 mt-3">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    isRequired
                    name="patient_name"
                    type="text"
                    defaultValue={patient?.patient_name}
                  >
                    <Label>Patient`s Name</Label>
                    <Input
                      placeholder="Enter patient`s name"
                      className={
                        "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
                      }
                    />
                  </TextField>

                  <TextField
                    isRequired
                    name="patient_disease"
                    type="text"
                    defaultValue={patient?.patient_disease}
                  >
                    <Label>Patient`s Diseases</Label>
                    <Input
                      placeholder="Enter patient`s diseases"
                      className={
                        "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
                      }
                    />
                  </TextField>

                  <TextField
                    isRequired
                    name="patient_contact"
                    type="text"
                    defaultValue={patient?.patient_contact}
                  >
                    <Label>Patient`s Contacts or Family</Label>
                    <Input
                      placeholder="Enter patient`s contact"
                      className={
                        "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
                      }
                    />
                  </TextField>

                  <TextField
                    isRequired
                    name="patient_address"
                    type="text"
                    defaultValue={patient?.patient_address}
                  >
                    <Label>Patient`s Address</Label>
                    <Input
                      placeholder="Enter patient`s address"
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
                        <p>Upload New Patient Image</p>
                        <p>JPEG or PNG</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-4">
                    <Button
                      slot="close"
                      variant="secondary"
                      className={"rounded-md"}
                    >
                      Cancel
                    </Button>

                    <Button
                      slot="close"
                      type="submit"
                      className={"rounded-md bg-[#005eb8]"}
                    >
                      Edit patient
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditPatient;
