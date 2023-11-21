import LandingAppmobileContent from "./landing-components/LandingAppmobileContent";
import LandingHelper from "@/helpers/LandingHelper";

const LandingAppmobile = (): JSX.Element => {
  const { appMobile } = LandingHelper();
  return (
    <div className="app-mobile">
      <div className="app-mobile__container">
        <div className="row">
          <div className="col-5 d-none d-md-flex">
            <div className="section-app">
              <img src={appMobile.image} alt="" />
            </div>
          </div>
          <LandingAppmobileContent />
        </div>
      </div>
    </div>
  );
};

export default LandingAppmobile;
