import Academy from "./components/Academy";
import HomeFaq from "./components/HomeFaq";
import InvestCalculator from "./components/InvestCalculator";
import MainTopBanner from "./components/MainBanner";
import WhyMyInvest from "./components/WhyMyInvest";
import WinBlock from "./components/WinBlock";

const HomePage = () => {
  return (
    <>
      <MainTopBanner />
      {/* <WinBlock /> */}
      <InvestCalculator />
      <Academy />
      <WhyMyInvest />
      <HomeFaq />
    </>
  );
};

export default HomePage;
