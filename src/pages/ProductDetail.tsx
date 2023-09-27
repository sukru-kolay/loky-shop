import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import tshirt1 from "../assets/productfront.webp";
import Select from "react-select";
import { Link } from "react-router-dom";

const options = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
];

const ProductDetail = () => {
  return (
    <div className=" App DetailPage">
      <Header />
      <div className="contentContainer">
        <div style={{ width: "50%" }}>
          <img src={tshirt1} alt="Logo" className="detailTshirtImage" />
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ width: "90%" }}>
            <div>
              <h1 style={{ textAlign: "left", color: "white" }}>Loky Pool</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 className="white">₺ 440.00</h1>
              <Link to="/bodySizes">
                <p className="underlineText white">Beden Tablosu</p>
              </Link>
            </div>
          </div>
          <div style={{ width: "25%" }}>
            <Select options={options} isSearchable={false} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
