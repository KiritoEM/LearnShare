import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";
import metaHelper from "@/helpers/metaHelper";
import LandingNav from "@/components/landing/LandingNav";
import LandingHero from "@/components/landing/LandingHero";
import LandingInfo from "@/components/landing/LandingInfo";
import LandingCitation from "@/components/landing/LandingCitation";
import LandingAppmobile from "@/components/landing/LandingAppmobile";
import LandingFooter from "@/components/landing/LandingFooter";

export default function login(): JSX.Element {
  const { metaTitleHelper } = metaHelper();
  return (
    <section className="landing">
      {/* =================metaTitle=============== */}
      <PageHeading title={metaTitleHelper.landingTitle} />

      {/* =================landingNav=============== */}
      <LandingNav />

      {/* =================landingBody=============== */}

      <main>
        <LandingHero />
        <LandingInfo />
        <LandingCitation />
        <LandingAppmobile />
      </main>

      {/* =================landinFooter=============== */}
      <footer>
        <LandingFooter />
      </footer>
    </section>
  );
}
