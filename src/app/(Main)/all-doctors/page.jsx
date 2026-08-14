import DoctorCard from "@/Components/DoctorCard/DoctorCard";
import { getDoctors } from "@/lib/api/doctors.js";

const AllDoctorsPage = async () => {
  const allDoctors = await getDoctors();

  return (
    <div className="max-w-330 px-4 mx-auto mt-5">
      <h2 className="font-bold text-2xl text-[#005eb8]">
        Explore Our Excellent Doctors
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {allDoctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default AllDoctorsPage;
