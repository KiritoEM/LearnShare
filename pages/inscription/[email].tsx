import PageHeading from "@/components/PageHeading";
import metaHelper from "@/helpers/metaHelper";
import { Fragment } from "react";
import LandingHelper from "@/helpers/LandingHelper";

const sendCode = (): JSX.Element => {
  const { metaTitleHelper } = metaHelper();
  const { navLandingData } = LandingHelper();
  return (
    <Fragment>
      <PageHeading title={metaTitleHelper.sendCodeTitle} />
      <section className="send-code">
        <div className="send-code__container">
          <div className="logo">
            {" "}
            <img src={navLandingData.logo} alt="" className="mx-2" />
            <h4>LearnShare</h4>
          </div>

          <div className="subtitle mt-4  text-center">
            <p>
              Nous avons envoyé un email à l' adresse email{" "}
              <b>"loick@gmail.com"</b>
            </p>
          </div>

          <div className="formulaire">
            <form action="post">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Entrez le code à 6 chiffres  ..."
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn">
                  Confirmer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default sendCode;
