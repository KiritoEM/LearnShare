import LandingNavItems from "./landing-components/LandingNavItems";
import LandingHelper from "@/helpers/LandingHelper";

const LandingNav = (): JSX.Element => {
  const {navLandingData} = LandingHelper()
  return (
    <section className="landing-nav">
      <div className="landing-nav__container">
        <div className="landing-nav__logo">
          <img src={navLandingData.logo} alt="" className="mx-2" />
          <h4>LearnShare</h4>
        </div>
        <LandingNavItems />
      </div>
    </section>
  );
};

export default LandingNav;
