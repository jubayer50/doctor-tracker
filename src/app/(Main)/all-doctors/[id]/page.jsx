const DoctorDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id, "from details page");

  return (
    <div className="max-w-330 mx-auto px-4 mt-6 mb-10">
      <h2 className="text-xl font-semibold text-[#005eb8]">
        Details of Doctor
      </h2>
    </div>
  );
};

export default DoctorDetails;
