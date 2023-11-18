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

type IlandingInfo = {
  image: string;
  text: string;
  color: string;
};

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

  const landingInfo: IlandingInfo[] = [
    {
      image: "/info1.png",
      text: `Découvrez une nouvelle approche d'apprentissage collaboratif avec
     notre système basé sur le peer learning.`,
      color: "#DDA0DD",
    },
    {
      image: "/info2.png",
      text: `Libérez votre potentiel en apprenant à votre propre rythme. Notre plateforme  vous permettet de progresser à votre manière.`,
      color: "#FFDB58",
    },
    {
      image: "/info3.png",
      text: `Rejoignez notre communauté active où le partage d'idées et le soutien mutuel sont au cœur de chaque réussite.`,
      color: "#98FB98",
    },
  ];

  return { navLandingData, landingHero, landingInfo };
}
