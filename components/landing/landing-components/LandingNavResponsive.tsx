import LandingHelper from "@/helpers/LandingHelper";
import { useRouter } from "next/router";
import { useNav } from "@/helpers/hooks/useNav";

const LandingNavResponsive = (): JSX.Element => {
  //navHelper importation
  const { navLandingData } = LandingHelper();

  const { openMenu, openOverlay } = useNav();

  //routing
  const router = useRouter();

  //array for navbar auth buttons
  const loginButton = [
    { label: "S' inscrire", href: "", class: "button1" },
    { label: "Se connecter", href: "" },
  ];
  return (
    <div className={`nav-responsive d-lg-none ${openMenu ? "open-menu" : "close-menu"}`}>
      <ul>
        {/* map navItem array */}
        {navLandingData.navItems.map((items, index) => (
          <li key={index}>
            <a
              href={`${items.href}`}
              className={router.pathname === items.href ? "active" : ""}
            >
              {items.label}
            </a>
          </li>
        ))}
      </ul>

      {/* map button auth array  */}
      <div id="loginButton">
        {loginButton.map((item, index) => (
          <div className={`button ${item.class}`} key={index}>
            {item.label}
          </div>
        ))}
      </div>

      <div className="desc">
        <div className="line"></div>

        <p>
          Optez pour un avenir meilleur , pour une éducation accessible avec
          notre application
        </p>
      </div>
    </div>
  );
};

export default LandingNavResponsive;
