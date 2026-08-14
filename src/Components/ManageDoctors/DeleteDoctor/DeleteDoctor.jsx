"use client";

import { deleteDoctor } from "@/lib/action/delete-doctors.js";
import { AlertDialog, Button, toast } from "@heroui/react";

const DeleteDoctor = ({ doctorId }) => {
  const handleDelete = async (doctorId) => {
    const result = await deleteDoctor(doctorId);

    console.log(result, "from delete doctor modal");
    if (result.deletedCount > 0) {
      toast.success("Doctor delete successfully");
    } else {
      toast.warning(result.message);
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger" size="sm" className={"rounded-md"}>
        Delete Project
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This doctor will be permanently deleted. This action cannot be
                undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className={"rounded-md"}>
                Cancel
              </Button>

              <Button
                onClick={() => handleDelete(doctorId)}
                slot="close"
                variant="danger"
                className={"rounded-md"}
              >
                Delete Doctor
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDoctor;
