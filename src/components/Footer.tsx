import React from "react";
import Input from "./Input";
import Button from "./Button";
const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="footerLeft">
        <ul className="footerList">
          <h3>Destek</h3>
          <li>
            <a href="#">Bize Ulaşın</a>
          </li>
          <li>
            <a href="#">Kargo ve İade</a>
          </li>
          <li>
            <a href="#">Beden Ölçüleri</a>
          </li>
          <li>
            <a href="#">Gizşlilik Sözleşmesi</a>
          </li>
          <li>
            <a href="#">Kullanıcı Sözleşmesi</a>
          </li>
        </ul>
      </div>
      <div className="footerRight">
        <p className="footerFormTitle">
          <span>LOKY'DEN</span>
          <br />
          <span> HABERLER</span>
        </p>
        {/* <input className="footerInput" placeholder="EPOSTA" type="email" /> */}
        <div className="mailDiv">
          <Input type="email" placeholder="EPOSTA" />
          <Button text="TAMAM" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
