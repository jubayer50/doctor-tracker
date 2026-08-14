import { Button, Table } from "@heroui/react";
import React from "react";

const DoctorManagement = async () => {
  return (
    <div className="">
      <h2 className="font-bold text-2xl text-[#005eb8]">Management Doctors</h2>

      <div className="mt-6">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>#Serial No.</Table.Column>
                <Table.Column>Dr. Name</Table.Column>
                <Table.Column>Join Data</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Patients</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>Dr. Puja</Table.Cell>
                  <Table.Cell>10-12-2026</Table.Cell>
                  <Table.Cell>kate@acme.com</Table.Cell>
                  <Table.Cell>5</Table.Cell>

                  <Table.Cell className={"flex items-center gap-2"}>
                    <Button size="sm" className={"rounded-md"}>
                      Add Patient
                    </Button>
                    <Button size="sm" className={"rounded-md"}>
                      View
                    </Button>
                    <Button size="sm" className={"rounded-md"}>
                      Edit
                    </Button>
                    <Button size="sm" className={"rounded-md"}>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default DoctorManagement;
