import DeletePatient from "@/Components/ManagePatient/DeletePatient/DeletePatient";
import { getPatients } from "@/lib/api/paitents.js";
import { Button, Table } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PatientsManagement = async () => {
  const patients = await getPatients();

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#005eb8]">Patients Management</h2>

      <div className="mt-8">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>#Serial No.</Table.Column>
                <Table.Column>Patient Image</Table.Column>
                <Table.Column>Patient Name</Table.Column>
                <Table.Column>Join Data</Table.Column>
                <Table.Column>Under Dr. Name</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {patients.map((patient, index) => (
                  <Table.Row key={patient._id}>
                    <Table.Cell>{index + 1}</Table.Cell>

                    <Table.Cell>
                      <Image
                        src={patient?.image}
                        alt="patient"
                        width={50}
                        height={50}
                        className="w-10 h-10 object-cover rounded"
                      ></Image>
                    </Table.Cell>

                    <Table.Cell>{patient.patient_name}</Table.Cell>

                    <Table.Cell>1</Table.Cell>

                    <Table.Cell>1</Table.Cell>

                    <Table.Cell className={"flex items-center gap-2"}>
                      <Button size="sm" className={"rounded-md"}>
                        Edit
                      </Button>

                      <DeletePatient patientId={patient._id}></DeletePatient>
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

export default PatientsManagement;
