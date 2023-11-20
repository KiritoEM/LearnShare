import LandingHelper from "@/helpers/LandingHelper";

const LoginForm = (): JSX.Element => {
  const { navLandingData } = LandingHelper();
  return (
    <div className="col-6">
      <div className="section-form">
        <div className="section-form__container">
          <div className="logo">
            {" "}
            <img src={navLandingData.logo} alt="" className="mx-2" />
            <h4>LearnShare</h4>
          </div>
          <div className="title mt-4">
            <h5>Rejoignez-nous en vous connectant</h5>
          </div>
          <div className="formulaire">
            <form action="post">
              <div className="form-group">
                <label>Adresse email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                   placeholder="Votre email ..."
                />
              </div>
              <div className="form-group mt-4">
              <label>Mot de passe</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="emailValue"
                  placeholder="Votre mot de passe ..."
                />
              </div>
              <div className="button mt-5">
                <button type="submit" className="btn">
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
