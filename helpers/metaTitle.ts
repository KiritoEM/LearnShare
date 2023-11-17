interface IlandingTitle{
  landingTitle: string
}

export default function metaTitle() {
   const metaTitleHelper: IlandingTitle={
     landingTitle:"Bienvenue sur LearnShare"
   }

   return {metaTitleHelper}
}
