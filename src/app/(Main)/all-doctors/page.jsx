import DoctorCard from "@/Components/DoctorCard/DoctorCard";
import Paginate from "@/Components/Paginate/Paginate";
import SearchAndFilter from "@/Components/SearchAndFilter/SearchAndFilter";
import { getDoctors } from "@/lib/api/doctors.js";

const AllDoctorsPage = async ({ searchParams }) => {
  const { search, specialization, page } = await searchParams;

  const params = new URLSearchParams();
  if (search) {
    params.set("search", search);
  }
  if (specialization) {
    params.set("specialization", specialization);
  }
  if (page) {
    params.set("page", page);
  }

  const { doctors: allDoctors, totalDoctors } = await getDoctors(params);

  return (
    <div className="max-w-330 px-4 mx-auto mt-6 mb-16">
      <h2 className="font-bold text-2xl text-[#005eb8]">
        Explore Our Excellent Doctors
      </h2>

      <div className="my-5 bg-[#d5effb] rounded-md p-3">
        <SearchAndFilter url={"/all-doctors"}></SearchAndFilter>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {allDoctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
        ))}
      </div>

      <div className="mt-8">
        <Paginate totalData={totalDoctors} url="/all-doctors"></Paginate>
      </div>
    </div>
  );
};

export default AllDoctorsPage;
