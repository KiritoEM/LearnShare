import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import LandingHelper from "@/helpers/LandingHelper";

const LandingHeroDesc = (): JSX.Element => {
  const { landingHero } = LandingHelper();
  return (
    //  Landing Hero Descripiton
    <div className="col-5">
      <div className="section-leftSide">
        <div className="title">
          <h2>Un Accès Universel à l'Éducation</h2>
        </div>

        <div className="subtitle mt-3">
          <p>
            Votre portail vers un monde d'éducation enrichissante. Explorez,
            apprenez et grandissez avec notre application éducative complète
          </p>
        </div>

        <div className="button mt-4">
          <button className="btn text-start">
            Commencer à apprendre{" "}
            <DotLottiePlayer
              autoplay={true}
              loop={true}
              src={`${landingHero.dotlottie_src}`}
              style={{ width: "62px", height: "62px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingHeroDesc;
