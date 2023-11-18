import LandingInfoContent from "./LandingInfoContent";

const LandingInfo = (): JSX.Element => {
  return (
    <section className="landing-info">
      <div className="landing-info__container">
        <div className="section-header">
          <h2>Explorer notre communauté</h2>
          <p>
            Ne soyez plus seul dans votre parcours éducatif. Rejoignez notre
            communauté active où le partage d'idées et le soutien mutuel sont au
            cœur de chaque réussite
          </p>
        </div>
        <LandingInfoContent />
      </div>
    </section>
  );
};

export default LandingInfo;
