import React from "react";
import productfront from "../assets/productfront.webp";
import productHover from "../assets/producthover.png";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <div className="buyButtonDivProduct">
          <Button text="SEPETE EKLE" theme="secondary" />
          <div className="mailDiv">
          <Link to="/ProductDetail">
            <p className="underlineText white">Ürünü İncele</p>
            </Link>
            <BsArrowRight className="white iconMarginHorizontal" />
          </div>
        </div>
      </div>

      <div className="productCardInfo">
        <p className="white">{name}</p>
        <p className="white">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;