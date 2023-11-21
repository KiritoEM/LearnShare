interface IlandingTitle{
  landingTitle: string,
  loginTitle: string,
  signupTitle:string
}

export default function metaHelper() {
   const metaTitleHelper: IlandingTitle={
     landingTitle:"Bienvenue sur LearnShare",
     loginTitle:"LearnShare - Se connecter",
     signupTitle:"LearnShare - Créer un compte"
   }

   return {metaTitleHelper}
}
