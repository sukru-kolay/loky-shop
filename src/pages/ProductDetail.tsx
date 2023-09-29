import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import tshirt1 from "../assets/productfront.webp";
import Select from "react-select";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {MdOutlineExpandLess} from "react-icons/md"

const options = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
];

const ProductDetail = () => {
  const handlePress = ()=>{
    console.log("Şükrü Kolay")
  }
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
            <Select options={options} isSearchable={false} required/>
          </div>
          <div style={{ width: "25%", marginTop: "1rem" }}>
            <Button text="SEPETE EKLE" theme="outlineButton" onPress={handlePress}/>
          </div>
          <div style={{marginTop:"1rem"}}>
      <Accordion >
        <AccordionSummary
          expandIcon={<MdOutlineExpandLess />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>DETAYLAR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sıcak kumlardan serin sulara atlayıp yazı Loky Pool ile karşılamaya hazır olun. Tüm dikkatleri üzerine çekecek olan bu model çok sınırlı sayıda şimdi satışta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdOutlineExpandLess />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>TESLİMAT VE İADE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
            Siparişler 2-5 işgünü içinde kargoya teslim edilmektedir. Sipariş kargoya verildiğinde takip kodu e-posta ile iletilmektedir.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
