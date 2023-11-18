import LandingInfoCard from "./LandingInfoCard";
import LandingHelper from "@/helpers/LandingHelper";

const LandingInfoContent = (): JSX.Element => {
  const { landingInfo } = LandingHelper();
  return (
    <div className="section-content mt-5">
      <div className="row">
        {landingInfo.map((item, index) => (
          <div className="col-4" key={index}>
            <LandingInfoCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingInfoContent;
