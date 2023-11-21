import LandingHelper from "@/helpers/LandingHelper";

const LoginForm = (): JSX.Element => {
  const { navLandingData } = LandingHelper();
  return (
    <div className="col-md-7 col-lg-6">
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
                <input
                  type="email"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Votre email ..."
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="text"
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

          <div className="authGoogle">
            <p>OU</p>
            <button className="btn">
              <img src="/authentification/icons8-google.png" className="mx-2" alt="" />
              Continuer avec Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
