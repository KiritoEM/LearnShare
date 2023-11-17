import LandingHelper from "@/helpers/LandingHelper";
import { useRouter } from "next/router";

const LandingNavItems = (): JSX.Element => {
  const { navLandingData } = LandingHelper();
  const router = useRouter();

  const loginButton = [{ label: "S' inscrire", href: "" }];

  return (
    <div className="landing-nav__items">
      <ul>
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
      <div id="loginButton">
        {loginButton.map((item, index) => (
          <div className="button" key={index}>
              {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingNavItems;
