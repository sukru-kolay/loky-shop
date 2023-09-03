import React from "react";
import productfront from "../assets/productfront.webp";
import productHover from "../assets/producthover.png";
import Button from "./Button";

interface IProuctProps {
  name: string;
  price: string;
}
const ProductCard: React.FC<IProuctProps> = ({ name, price }) => {
  return (
    <div className="productCardDiv">
      <div className="imageDiv">
        <img className="productImage frontImage" src={productfront} alt="" />
        <img className="productImage hoverImage" src={productHover} alt="" />
      </div>
      {/* <Button text="SEPETE EKLE" /> */}

      <div className="productCardInfo">
        <p className="white">{name}</p>
        <p className="white">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
