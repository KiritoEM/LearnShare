import { Fragment } from "react";
import PageHeading from "@/components/PageHeading";
import metaTitle from "@/helpers/metaTitle";
import LandingNav from "@/components/landing/LandingNav";
import LandingHero from "@/components/landing/LandingHero";

export default function login(): JSX.Element {
  const { metaTitleHelper } = metaTitle();
  return (
    <section className="landing">
      {/* =================metaTitle=============== */}
      <PageHeading title={metaTitleHelper.landingTitle} />

      {/* =================landingNav=============== */}
      <LandingNav />

      <main>
        <LandingHero />
      </main>
    </section>
  );
}
