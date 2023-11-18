import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

interface Iprops {
  image: string;
  text: string;
  color: string;
}

const LandingInfoCard: React.FC<Iprops> = ({
  image,
  text,
  color,
}): JSX.Element => {
  return (
    <div className="box" style={{ backgroundColor: `${color}` }}>
      <div className="box__cover">
        <DotLottiePlayer
          autoplay={true}
          loop={true}
          src={image}
          className="img"
        />
      </div>
      <div className="box__content mt-2">
        <h5>{text}</h5>
      </div>
    </div>
  );
};

export default LandingInfoCard;
