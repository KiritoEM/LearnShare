interface IlandingTitle{
  landingTitle: string,
  loginTitle: string,
  signupTitle:string,
  sendCodeTitle: string
}

export default function metaHelper() {
   const metaTitleHelper: IlandingTitle={
     landingTitle:"Bienvenue sur LearnShare",
     loginTitle:"LearnShare - Se connecter",
     signupTitle:"LearnShare - Créer un compte",
     sendCodeTitle: "Entrer le code à 6 chiffres"
   }

   return {metaTitleHelper}
}
