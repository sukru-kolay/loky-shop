import Marquee from "react-fast-marquee";
import "../App.css";
import logo from "../assets/logo.jpg";
import UserIcon from "../components/UserIcon";
import SearchIcon from "../components/SearchIcon";
import TshirtCard from "../components/TshirtCard";
import tshirt1 from "../assets/tshirt1.webp";
import tshirt2 from "../assets/tshirt2.webp";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
function Main() {
  return (
    <>
      <div className="App">
        <Header/>
        <div className="tshirtBannerDiv">
          <TshirtCard
            tshirtLogo={tshirt1}
            type="Limited Edition"
            tshirtName="Chill"
          />
          <TshirtCard
            tshirtLogo={tshirt2}
            type="Limited Edition"
            tshirtName="Hero"
          />
        </div>
        <Marquee>
          <p className="iconMarginHorizontal marqueeText">YENİ </p>
          <p className="iconMarginHorizontal marqueeText">DROP </p>
          <p className="iconMarginHorizontal marqueeText">AĞUSTOSTA </p>
          <p className="iconMarginHorizontal marqueeText">YENİ </p>
          <p className="iconMarginHorizontal marqueeText">DROP </p>
          <p className="iconMarginHorizontal marqueeText">AĞUSTOSTA </p>
          <p className="iconMarginHorizontal marqueeText">YENİ </p>
          <p className="iconMarginHorizontal marqueeText">DROP </p>
          <p className="iconMarginHorizontal marqueeText">AĞUSTOSTA </p>
          <p className="iconMarginHorizontal marqueeText">YENİ </p>
          <p className="iconMarginHorizontal marqueeText">DROP </p>
          <p className="iconMarginHorizontal marqueeText">AĞUSTOSTA </p>
        </Marquee>

        <div className="eskiSerilerDiv">
          <p className="title ">ESKI SERİLER</p>
          <div className="tshirtBannerDiv">
            <ProductCard name="Loky Pool" price="₺ 440.00" />
            <ProductCard name="Loky Melt" price="₺ 440.00" />
            <ProductCard name="Loky Zen" price="₺ 440.00" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
