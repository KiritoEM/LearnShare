interface IAppData {
  icon: string;
}

const LandingAppmobileContent = (): JSX.Element => {
  const AppData: IAppData[] = [
    { icon: "/appStore.png" },
    { icon: "/appStore.png" },
  ];

  return (
    <div className="col-7">
      <div className="section-description">
        <h2>
          Bientôt LearnShare disponible sur tous les plateformes{" "}
          <span>en Application mobile</span>
        </h2>

        <div className="icones">
          {AppData.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingAppmobileContent;
