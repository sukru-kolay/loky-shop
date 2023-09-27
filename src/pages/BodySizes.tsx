import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import bodySize from "../assets/bodySize.webp";
function BodySizes() {
  return (
    <div className=" App DetailPage">
      <Header />
      <div className="contentContainer">
        <div style={{ width: "50%" }}>
          <img src={bodySize} alt="Logo" className="detailTshirtImage" />
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ width: "90%" }}>
            <h1 className="white">BEDEN ÖLÇÜLERİ</h1>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h2 className="white">Boy</h2>
              </div>
              <div>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">S</td>
                  </div>
                  <td className="white marginLeft1">67</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">M</td>
                  </div>
                  <td className="white marginLeft1">72</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">L</td>
                  </div>
                  <td className="white marginLeft1">74</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">XL</td>
                  </div>
                  <td className="white marginLeft1">76</td>
                </tr>
              </div>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h2 className="white">Göğüs</h2>
              </div>
              <div>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">S</td>
                  </div>
                  <td className="white marginLeft1">55</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">M</td>
                  </div>
                  <td className="white marginLeft1">58</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">L</td>
                  </div>
                  <td className="white marginLeft1">61</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">XL</td>
                  </div>
                  <td className="white marginLeft1">64</td>
                </tr>
              </div>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h2 className="white">Kol Boyu</h2>
              </div>
              <div>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">S</td>
                  </div>
                  <td className="white marginLeft1">21</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">M</td>
                  </div>
                  <td className="white marginLeft1">21.5</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">L</td>
                  </div>
                  <td className="white marginLeft1">22</td>
                </tr>
                <tr>
                  <div className="iconMarginHorizontal">
                    <td className="white marginLeft1">XL</td>
                  </div>
                  <td className="white marginLeft1">22.5</td>
                </tr>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BodySizes;
