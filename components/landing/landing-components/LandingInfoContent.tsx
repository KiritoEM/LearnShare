import LandingInfoCard from "./LandingInfoCard";
import LandingHelper from "@/helpers/LandingHelper";

const LandingInfoContent = (): JSX.Element => {
  const { landingInfo } = LandingHelper();
  return (
    <div className="section-content mt-5">
      <div className="row gx-0 gx-md-5 gy-5 gy-md-5 gy-lg-2">
        {landingInfo.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <LandingInfoCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingInfoContent;
