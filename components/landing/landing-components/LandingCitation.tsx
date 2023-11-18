const LandingCitation = () : JSX.Element => {
    return (
        <section className="landing-citation">
            <div className="landing-citation__container">
                  <div className="row gx-5">
                      <div className="col-7">
                          <div className="section-cover">
                             <img src="/citation.svg" alt="" />
                          </div>
                      </div>
                      <div className="col-5">
                         <div className="section-description">
                            <div className="citation-header">
                                 <h2>Promouvoir l' éducation</h2>
                            </div>
                              <div className="citation-content mt-4">
                                  <p>"L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde."</p>
                              </div>

                              <div className="citation-author mt-2">
                                  <h4>Nelson Mandela</h4>
                              </div>
                         </div>
                      </div>
                  </div>
            </div>
        </section>
    );
};

export default LandingCitation;