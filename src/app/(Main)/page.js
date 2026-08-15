import Banner from "@/Components/Banner/Banner";
import Footer from "@/Components/Footer/Footer";
import StatsSection from "@/Components/StatsSection/StatsSection";
import TopDoctorsSection from "@/Components/TopDoctorsSection/TopDoctorsSection";

const HomePage = () => {
  return (
    <div className="">
      <Banner></Banner>

      <TopDoctorsSection></TopDoctorsSection>

      <StatsSection className={"my-26"}></StatsSection>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
