import { useEffect, useState } from "react";

type InavLandingData = {
  logo: string;
  navItems: InavItems[];
};

/*
    interface of navItems from InavLandingData
  */
interface InavItems {
  label: string;
  href: string;
}

interface IlandingHero {
  img: string;
  dotlottie_src: string;
}

export default function LandingHelper() {
  const navLandingData: InavLandingData = {
    logo: "/logo.png",
    navItems: [
      { label: "Accueil", href: "/" },
      { label: "Actualité", href: "" },
      { label: "Découvrir", href: "" },
      { label: "Contact", href: "" },
    ],
  };

  const landingHero: IlandingHero = {
    img: "layer.png",
    dotlottie_src: `https://lottie.host/28563c0a-d4bb-44f8-ae4c-db5763d22e86/RkfOShsQ2z.json`,
  };

 

  return { navLandingData, landingHero};
}
