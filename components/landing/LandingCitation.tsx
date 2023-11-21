import LandingCitationContent from "./landing-components/LandingCitationContent";
import LandingHelper from "@/helpers/LandingHelper";

const LandingCitation = (): JSX.Element => {
  const { citationData } = LandingHelper();
  return (
    <section className="landing-citation">
      <div className="landing-citation__container">
        <div className="row gx-5 gy-4 gy-md-2">
          <div className="col-md-5 col-lg-7">
            <div className="section-cover">
              <img src={citationData.image} alt="" />
            </div>
          </div>
          <LandingCitationContent {...citationData} />
        </div>
      </div>
    </section>
  );
};

export default LandingCitation;
