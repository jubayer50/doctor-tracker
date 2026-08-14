import AddPatient from "@/Components/ManagePatient/AddPatient/AddPatient";
import DeleteDoctor from "@/Components/ManageDoctors/DeleteDoctor/DeleteDoctor";
import { getDoctors } from "@/lib/api/doctors.js";
import { Button, Table } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EditDoctor from "@/Components/ManageDoctors/EditDoctor";

const DoctorManagement = async () => {
  const doctors = await getDoctors();

  return (
    <div className="">
      <h2 className="font-bold text-2xl text-[#005eb8]">Management Doctors</h2>

      <div className="mt-6">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>#Serial No.</Table.Column>
                <Table.Column>Dr. Image</Table.Column>
                <Table.Column>Dr. Name</Table.Column>
                <Table.Column>Join Data</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Patients</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {doctors.map((doctor, index) => (
                  <Table.Row key={doctor._id}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>
                      <Image
                        src={doctor.image}
                        alt="dr"
                        width={50}
                        height={50}
                        className="w-10 h-10 object-cover rounded"
                      ></Image>
                    </Table.Cell>
                    <Table.Cell>{doctor.doctor_name}</Table.Cell>
                    <Table.Cell>10-12-2026</Table.Cell>
                    <Table.Cell>{doctor.email}</Table.Cell>
                    <Table.Cell>
                      {doctor.patientCount ? doctor?.patientCount : 0}
                    </Table.Cell>

                    <Table.Cell className={"flex items-center gap-2"}>
                      <AddPatient doctorId={doctor._id}></AddPatient>

                      <Link href={`/all-doctors/${doctor._id}`}>
                        <Button size="sm" className={"rounded-md"}>
                          View
                        </Button>
                      </Link>

                      <EditDoctor doctor={doctor}></EditDoctor>

                      <DeleteDoctor doctorId={doctor._id}></DeleteDoctor>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default DoctorManagement;
