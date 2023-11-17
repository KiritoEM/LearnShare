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

  const landingHero = {
    img: "layer.png",
  };

  return { navLandingData, landingHero };
}
