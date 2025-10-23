import Academy from "./components/Academy";
import BePartner from "./components/BePartner";
import HomeFaq from "./components/HomeFaq";
import HowToBuy from "./components/HowToBuy";
import InvestCalculator from "./components/InvestCalculator";
import InvestEasyWay from "./components/InvestEasyWay";
import MainTopBanner from "./components/MainBanner";
import WhyMyInvest from "./components/WhyMyInvest";
import WinBlock from "./components/WinBlock";

const HomePage = () => {
  return (
    <>
      <MainTopBanner />
      <WinBlock />
      <InvestCalculator />
      <HowToBuy />
      <InvestEasyWay />
      <Academy />
      <WhyMyInvest />
      <BePartner />
      <HomeFaq /> 
    </>
  );
};

export default HomePage;
