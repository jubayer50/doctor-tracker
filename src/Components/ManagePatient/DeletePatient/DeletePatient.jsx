"use client";

import { deletePatient } from "@/lib/action/delete-patient.js";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeletePatient = ({ patientId }) => {
  const router = useRouter();

  const handleDelete = async (patientId) => {
    const result = await deletePatient(patientId);

    if (result.deletedCount > 0) {
      toast.success("Patient delete successfully");
      router.refresh();
    } else {
      toast.warning(result.message);
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger" size="sm" className={"rounded-md"}>
        Delete Patient
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete patient permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This Patient will be permanently deleted. This action cannot be
                undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className={"rounded-md"}>
                Cancel
              </Button>

              <Button
                onClick={() => handleDelete(patientId)}
                slot="close"
                variant="danger"
                className={"rounded-md"}
              >
                Delete Patient
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeletePatient;
