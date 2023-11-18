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

interface IappMobile{
  image: string
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

  const landingInfo: IlandingInfo[] = [
    {
      image: "https://lottie.host/262ba02d-c175-448d-9940-0549e1e25dad/IcOd9JlD9M.json",
      text: `Découvrez une nouvelle approche d'apprentissage collaboratif avec
     notre système basé sur le peer learning.`,
      color: "#DDA0DD",
    },
    {
      image: "https://lottie.host/4122308a-cbc2-420c-85db-0f44cbf6eb47/JdR4rkoOUC.json",
      text: `Libérez votre potentiel en apprenant à votre propre rythme. Notre plateforme  vous permettet de progresser à votre manière.`,
      color: "#FFDB58",
    },
    {
      image: "https://lottie.host/731e290f-2aa4-4692-89c2-8ebaac205b26/ptJHmwQIiS.json",
      text: `Rejoignez notre communauté active où le partage d'idées et le soutien mutuel sont au cœur de chaque réussite.`,
      color: "#98FB98",
    },
  ];

  const citationData = {
    image: "/citation.svg",
    header: "Promouvoir l'éducation",
    content: `"L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde."`,
    author: "Nelson Mandela",
  };

  const appMobile: IappMobile ={
    image:"/mobileApp.png",
  }

  return { navLandingData, landingHero, landingInfo  , citationData, appMobile};
}
