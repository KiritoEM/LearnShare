import PageHeading from "@/components/PageHeading";
import { Fragment } from "react";
import metaHelper from "@/helpers/metaHelper";
import LoginForm from "@/components/login/LoginForm";
import LoginCover from "@/components/login/LoginCover";

const login = (): JSX.Element => {
  const { metaTitleHelper } = metaHelper();
  return (
    <Fragment>
      <PageHeading title={metaTitleHelper.loginTitle} />
      <div className="login">
        <div className="login__container">
          <div className="row">
            {/* =================login form=============== */}
            <LoginForm />

            {/* =================login cover=============== */}
            <LoginCover />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default login;
