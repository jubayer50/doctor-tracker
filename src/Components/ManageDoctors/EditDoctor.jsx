"use client";

import { updateDoctor } from "@/lib/action/updateDoctorData.js";
import { uploadImage } from "@/lib/uploadImage.js";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TfiUpload } from "react-icons/tfi";

const EditDoctor = ({ doctor }) => {
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
    const doctorData = Object.fromEntries(formData.entries());

    // get the image from update input
    const imageFile = formData.get("image");

    // old image
    let finalImage = doctor.image;

    // now update
    if (imageFile && imageFile.size > 0) {
      const hostUrl = await uploadImage(imageFile);
      finalImage = hostUrl;
    }

    const newDoctorData = {
      ...doctorData,
      image: finalImage,
    };

    const result = await updateDoctor(doctor?._id, newDoctorData);

    if (result.modifiedCount) {
      toast.success("Doctor information successfully updated!");
      router.refresh();
    } else {
      toast.warning(result.massage);
    }
  };

  return (
    <div>
      <Modal>
        <Button size="sm" className={"rounded-md"}>
          Edit Doctor
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="rounded-lg max-w-150">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaRegEdit className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Doctor Information</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-3">
                <Surface variant="default">
                  <Form
                    onSubmit={onSubmit}
                    className="max-w-180 p-3 md:p-6 rounded-lg space-y-6 border border-[#a9dbf1]"
                  >
                    <TextField
                      isRequired
                      name="doctor_name"
                      type="text"
                      defaultValue={doctor?.doctor_name}
                    >
                      <Label>Doctor Name</Label>
                      <Input
                        placeholder="Enter doctor name"
                        className={
                          "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
                        }
                      />
                    </TextField>

                    <TextField
                      isRequired
                      name="specialization"
                      type="text"
                      defaultValue={doctor?.specialization}
                    >
                      <Label>Doctor`s Specialization</Label>
                      <Input
                        placeholder="Enter doctor's specialization"
                        className={
                          "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
                        }
                      />
                    </TextField>

                    <TextField
                      isRequired
                      name="hospital"
                      type="text"
                      defaultValue={doctor?.hospital}
                    >
                      <Label>Doctor`s Hospital Name</Label>
                      <Input
                        placeholder="Enter doctor's hospital name"
                        className={
                          "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
                        }
                      />
                    </TextField>

                    <TextField
                      isRequired
                      name="phone"
                      type="text"
                      defaultValue={doctor?.phone}
                    >
                      <Label>Doctor`s Phone Number</Label>
                      <Input
                        placeholder="Enter doctor phone"
                        className={
                          "rounded-md border border-[#005eb850] focus:border-[#005eb8] shadow"
                        }
                      />
                    </TextField>

                    <TextField
                      isRequired
                      name="email"
                      type="text"
                      defaultValue={doctor?.email}
                    >
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
                          <p>Upload New Doctor Image</p>
                          <p>JPEG or PNG</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        slot={"close"}
                        type="submit"
                        className={"bg-[#005eb8] rounded-md"}
                      >
                        Update Doctor Info
                      </Button>
                    </div>
                  </Form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditDoctor;
