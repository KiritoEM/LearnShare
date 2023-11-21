import React from "react";

interface IcitationProps {
  header: string;
  content: string;
  author: string;
}

const LandingCitationContent: React.FC<IcitationProps> = ({
  header,
  content,
  author,
}): JSX.Element => {
  return (
    <div className="col-md-7 col-lg-5">
      <div className="section-description">
        <div className="citation-header">
          <h2>{header}</h2>
        </div>
        <div className="citation-content mt-4">
          <p>{content}</p>
        </div>

        <div className="citation-author mt-2">
          <h4>{author}</h4>
        </div>
      </div>
    </div>
  );
};

export default LandingCitationContent;
