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
      {/* <div className="textDiv"> */}
      <h2 className="tshirtName">{tshirtName}</h2>
      <h1 className="tshirtType">{type}</h1>
      {/* </div> */}
      <div className="imageDiv">
        <img src={tshirtLogo} className="tshirtImage" />
      </div>
      <Button text="SATIN AL" />
    </div>
  );
};

export default TshirtCard;
