import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";
import metaTitle from "@/helpers/metaTitle";
import LandingNav from "@/components/landing/LandingNav";
import LandingHero from "@/components/landing/LandingHero";
import LandingInfo from "@/components/landing/LandingInfo";
import LandingCitation from "@/components/landing/LandingCitation";
import LandingAppmobile from "@/components/landing/LandingAppmobile";

export default function login(): JSX.Element {
  const { metaTitleHelper } = metaTitle();
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
      </footer>
    </section>
  );
}
