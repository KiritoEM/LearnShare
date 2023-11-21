import { Fragment, useEffect, useState } from "react";
import LandingNavItems from "./landing-components/LandingNavItems";
import LandingHelper from "@/helpers/LandingHelper";
import LandingNavResponsive from "./landing-components/LandingNavResponsive";
import MenuButton from "./landing-components/MenuButton";
import { useNav } from "@/helpers/hooks/useNav";

const LandingNav = () => {
  //navHelper importation
  const { navLandingData } = LandingHelper();

  //menutoogle importation
  const { menuToogle, openOverlay } = useNav();

  //hooks for scrolling observer
  const [scrollY, setScrollY] = useState<number>(0);

  //make nav Position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const windowHeight = scrollY > 100;

  return (
    <Fragment>
      <section className={`landing-nav ${windowHeight ? "fixed" : "relative"}`}>
        <div className="landing-nav__container">
          {/* =================Navbar logo=============== */}
          <div
            className={`landing-nav__logo ${
              windowHeight ? "text-light" : "text-primaire"
            }`}
          >
            {windowHeight ? (
              <img
                src="/logo-white.png"
                alt=""
                className="mx-2 d-none d-lg-flex"
              />
            ) : (
              <img
                src={navLandingData.logo}
                alt=""
                className="mx-2 d-none d-lg-flex"
              />
            )}

            <img src="/logo-white.png" alt="" className="mx-2 d-lg-none" />
            <h4>LearnShare</h4>
          </div>

          {/* =================Navbar item=============== */}
          <LandingNavItems />

          <MenuButton
            action={() => {
              menuToogle();
            }}
          />
        </div>

        {/* =================Navbar for responsive=============== */}
      </section>

      <LandingNavResponsive />

      {openOverlay && <div className="overlay"></div>}
    </Fragment>
  );
};

export default LandingNav;
