import Statistics from "@components/statistics/Statistics";
import HeroSection from "@components/hereSection/HeroSection";

const Home = () => {
  return (
    <div className="md:mx-[10%] mt-[8vh] h-[92vh] mb-[30px] flex flex-col justify-evenly ">
     <HeroSection/>
      <Statistics />
    </div>
  );
};
export default Home;
