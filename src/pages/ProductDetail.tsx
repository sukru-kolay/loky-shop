import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import tshirt1 from "../assets/productfront.webp";
import Select from "react-select";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
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
          <div style={{ width: "25%", marginTop: "1rem" }}>
            <Button text="SATIN AL" theme="outlineButton" />
          </div>
          <Accordion>
            <AccordionItem header="DETAYLAR">
              Sıcak kumlardan serin sulara atlayıp yazı Loky Pool ile
              karşılamaya hazır olun. Tüm dikkatleri üzerine çekecek olan bu
              model çok sınırlı sayıda şimdi satışta.
            </AccordionItem>
            <hr />
            <AccordionItem header="TESLİMAT  VE İADE">
              <h3 className="white">Kargo & Teslimat</h3> Siparişler 2-5 işgünü
              içinde kargoya teslim edilmektedir. Sipariş kargoya verildiğinde
              takip kodu e-posta ile iletilmektedir.{" "}
              <h3 className="white">İade</h3> Ayıplı ya da hasarlı mal teslim
              alındıktan sonraki 14 gün içerisinde iade edilebilmektedir. Ürünün
              iadesinin yapılabilmesi için, sisteme üye girişi yaptıktan sonra
              "Siparişlerim" kısmından iade talebi oluşturabilirsiniz. Üye
              olmadan satın aldıysanız iade isteğinizi "Iade - Sipariş No"
              başlığıyla hello@loky.shop'a iletebilirsiniz
            </AccordionItem>
            <hr />
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
