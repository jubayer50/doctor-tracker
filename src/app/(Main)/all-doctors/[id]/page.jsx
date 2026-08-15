import { getDoctorById } from "@/lib/api/doctors.js";
import Image from "next/image";
import {
  FaUserMd,
  FaHospital,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaStethoscope,
  FaTrash,
} from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { Button } from "@heroui/react";
import Link from "next/link";
import DeletePatient from "@/Components/ManagePatient/DeletePatient/DeletePatient";

const DoctorDetails = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctorById(id);
  console.log(doctor);

  // Format date
  const formattedDate = doctor?.createdAt
    ? new Date(doctor.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  return (
    <div className="max-w-330 mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#005eb8] p-2 rounded-lg">
          <FaUserMd className="text-white text-xl" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#005eb8]">
          Doctor Details
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#005eb850]">
            {/* Cover Image */}
            <div className="h-24 bg-linear-to-r from-[#005eb8] to-[#0088cc]"></div>

            {/* Profile Image */}
            <div className="flex justify-center -mt-12">
              <div className="w-32 h-32 rounded-full border-2 border-[#005eb8] shadow-md overflow-hidden bg-white">
                <Image
                  src={
                    doctor?.image || "https://i.ibb.co.com/MxfRjbYY/user.png"
                  }
                  alt={doctor.doctor_name || "Doctor"}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {doctor?.doctor_name || "N/A"}
              </h3>
              <div className="inline-block bg-blue-50 text-[#005eb8] text-sm font-medium px-3 py-1 rounded-full mb-4">
                <span className="flex items-center gap-1">
                  <FaStethoscope className="text-xs" />
                  {doctor?.specialization || "Not specified"}
                </span>
              </div>

              <div className="space-y-3 text-left mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaHospital className="text-[#005eb8] w-4" />
                  <span className="text-sm">{doctor?.hospital || "N/A"}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaEnvelope className="text-[#005eb8] w-4" />
                  <span className="text-sm">{doctor?.email || "N/A"}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaPhone className="text-[#005eb8] w-4" />
                  <span className="text-sm">{doctor?.phone || "N/A"}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaCalendarAlt className="text-[#005eb8] w-4" />
                  <span className="text-sm">Joined: {formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-lg shadow border border-[#005eb850] p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Total Patients
                  </p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">
                    {doctor?.patients?.length || 0}
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaUsers className="text-[#005eb8] text-lg" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow border border-[#005eb850] p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Specialization
                  </p>
                  <p className="text-lg font-bold text-gray-800 mt-1 truncate">
                    {doctor?.specialization?.split(" ")[0] || "N/A"}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-full">
                  <MdMedicalServices className="text-green-600 text-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Patients List Card - Updated */}
          <div className="bg-white rounded-lg shadow border border-[#005eb850] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#005eb8]" />
                <h4 className="font-semibold text-gray-800">Patients List</h4>
              </div>
              <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                {doctor?.patients?.length || 0} patients
              </span>
            </div>

            {doctor?.patients && doctor.patients.length > 0 ? (
              <div className="space-y-2">
                {doctor.patients.map((patient, index) => (
                  <div
                    key={patient._id?.toString() || index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {/* Serial Number */}
                      <span className="w-6 h-6 rounded-full bg-[#005eb8] text-white text-xs flex items-center justify-center font-medium shrink-0">
                        {index + 1}
                      </span>

                      {/* Patient Image */}
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0 border border-gray-300">
                        <Image
                          src={
                            patient.image ||
                            "https://i.ibb.co.com/MxfRjbYY/user.png"
                          }
                          alt={patient.patient_name || "Patient"}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Patient Name & Disease */}
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {patient.patient_name || "Unknown Patient"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {patient.patient_disease || "No disease specified"}
                        </p>
                      </div>
                    </div>

                    {/* Delete Icon */}
                    <DeletePatient patientId={patient._id}></DeletePatient>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400">
                <FaUsers className="text-4xl mx-auto mb-3 text-gray-300" />
                <p>No patients assigned yet</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-[#005eb8] hover:bg-[#034c91] text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              <FaEnvelope />
              Send Message
            </Button>

            <Link href={`/dashboard/doctors-management`}>
              <Button className="border border-gray-300 bg-transparent text-gray-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
                Edit Profile
              </Button>
            </Link>

            <Button className="border border-red-300 bg-transparent hover:bg-red-50 text-red-600 px-6 py-2.5 rounded-lg font-medium transition-colors">
              Archive
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
