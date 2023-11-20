interface IlandingTitle{
  landingTitle: string,
  loginTitle: string
}

export default function metaHelper() {
   const metaTitleHelper: IlandingTitle={
     landingTitle:"Bienvenue sur LearnShare",
     loginTitle:"LearnShare - Se connecter"
   }

   return {metaTitleHelper}
}
