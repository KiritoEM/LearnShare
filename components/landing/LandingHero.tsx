import LandingHeroDesc from "./landing-components/LandingHeroDesc";
import LandingHelper from "@/helpers/LandingHelper";
const LandingHero = (): JSX.Element => {
  //landingHeroHelper importation
  const { landingHero } = LandingHelper();
  return (
    <section className="landing-hero">
      <div className="hero-container">
        <div className="row">
          {/* =================Landing Hero Description=============== */}
          <LandingHeroDesc />

          {/* =================Landing Hero cover=============== */}
          <div className="col-md-7">
            <div className="section-rightSide">
              <img src={landingHero.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
