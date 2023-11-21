import PageHeading from "@/components/PageHeading";
import metaHelper from "@/helpers/metaHelper";
import { Fragment } from "react";
import LandingHelper from "@/helpers/LandingHelper";

const index = (): JSX.Element => {
  const { metaTitleHelper } = metaHelper();
  const { navLandingData } = LandingHelper();
  return (
    <Fragment>
      <PageHeading title={metaTitleHelper.signupTitle} />
      <section className="signup">
        <div className="signup__container">
          <div className="logo">
            {" "}
            <img src={navLandingData.logo} alt="" className="mx-2" />
            <h4>LearnShare</h4>
          </div>

          <div className="title mt-4  text-center">
            <h5>S' inscrire en créant un compte</h5>
          </div>

          <div className="formulaire">
            <form action="post">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Entrez votre email ..."
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn">
                  Créer un compte
                </button>
              </div>
            </form>
          </div>

          <div className="authGoogle">
            <p>OU</p>
            <button className="btn">
              <img
                src="/authentification/icons8-google.png"
                className="mx-2"
                alt=""
              />
              Continuer avec Google
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default index;
