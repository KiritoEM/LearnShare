import PageHeading from "@/components/PageHeading";
import LandingHelper from "@/helpers/LandingHelper";
import { Fragment } from "react";
import metaHelper from "@/helpers/metaHelper";

const SignupFinal = (): JSX.Element => {
  const { navLandingData } = LandingHelper();
  const { metaTitleHelper } = metaHelper();
  return (
    <Fragment>
      <PageHeading title={metaTitleHelper.signupFinalTitle} />
      <section className="signup-final">
        <div className="signup-final__container">
          <div className="logo">
            {" "}
            <img src={navLandingData.logo} alt="" className="mx-2" />
            <h4>LearnShare</h4>
          </div>

          <div className="title mt-4  text-center">
            <h5>Finalisez votre inscription</h5>
          </div>

          <div className="formulaire">
            <form action="post">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nom d 'utilisateur ..."
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  name="password"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nouveau mot de passe   ..."
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn">
                  Créer un compte
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignupFinal;
