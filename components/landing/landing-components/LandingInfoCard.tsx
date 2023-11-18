import LandingHelper from "@/helpers/LandingHelper";
import React from "react";

interface Iprops {
  image: string;
  text: string;
  color: string
}

const LandingInfoCard: React.FC<Iprops> = ({ image, text , color}): JSX.Element => {
  return (
    <div className="box" style={{ backgroundColor: `${color}` }}>
      <div className="box__cover">
        <img src={image} alt="" />
      </div>
      <div className="box__content mt-2">
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default LandingInfoCard;
