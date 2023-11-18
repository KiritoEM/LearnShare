import LandingHelper from "@/helpers/LandingHelper";
import { useRouter } from "next/router";

const LandingNavItems = (): JSX.Element => {
    //navHelper importation
  const { navLandingData } = LandingHelper();

  //routing
  const router = useRouter();

  //array for navbar auth buttons
  const loginButton = [
    { label: "S' inscrire", href: "" , class:"button1"},
    { label: "Se connecter", href: "" },
  ];

  return (
    <div className="landing-nav__items">
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
    </div>
  );
};

export default LandingNavItems;
