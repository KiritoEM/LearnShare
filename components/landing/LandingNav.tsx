import { useEffect, useState } from "react";
import LandingNavItems from "./landing-components/LandingNavItems";
import LandingHelper from "@/helpers/LandingHelper";

const LandingNav = () => {
  //navHelper importation
  const { navLandingData } = LandingHelper();

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
    <section className={`landing-nav ${windowHeight ? "fixed": "relative"}`}>
      <div className="landing-nav__container">
        {/* =================Navbar logo=============== */}
        <div className={`landing-nav__logo ${windowHeight ? "text-light": "text-primaire"}`}>
          <img src={navLandingData.logo} alt="" className="mx-2" />
          <h4>LearnShare</h4>
        </div>

        {/* =================Navbar item=============== */}
        <LandingNavItems />
      </div>
    </section>
  );
};

export default LandingNav;
