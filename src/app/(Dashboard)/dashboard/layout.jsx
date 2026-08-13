import DashboardSideBar from "@/Components/Dashboard/DashboardSideBar/DashboardSideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10">
      <DashboardSideBar></DashboardSideBar>
      <div className="max-w-330 px-3 mt-6 flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
