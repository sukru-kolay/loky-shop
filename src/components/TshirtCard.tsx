import React from "react";
import Button from "./Button";
interface IProps {
  type?: string;
  tshirtLogo: string;
  tshirtName: string;
}
const TshirtCard: React.FC<IProps> = ({ tshirtLogo, type, tshirtName }) => {
  return (
    <div className="tshirtCard">
      <h2 className="tshirtName">{tshirtName}</h2>
      <h3 className="tshirtType">{type}</h3>
      <div className="imageDiv">
        <img src={tshirtLogo} className="tshirtImage" />
        <div className="buyButtonDiv">
          <Button text="SATIN AL" theme="secondary" />
        </div>
      </div>
    </div>
  );
};

export default TshirtCard;
