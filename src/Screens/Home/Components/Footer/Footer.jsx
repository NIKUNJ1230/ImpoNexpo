import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Single_footer from "./Single_footer";
import img1 from "../../../../assets/images/payment-1.svg";
import img2 from "../../../../assets/images/payment-2.svg";
import img3 from "../../../../assets/images/payment-3.svg";
import img4 from "../../../../assets/images/payment-4.svg";
import img5 from "../../../../assets/images/payment-5.svg";
import qr from "../../../../assets/images/qr.svg";
import logo from "../../../../assets/images/footer-logo.svg";
import apple from "../../../../assets/images/Icon metro-apple.svg";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-title">
            <h5>
              Yes! Send me exclusive offers, unique gift ideas, and personalized
              tips for shopping and selling on ImpoNexpo
            </h5>
            <div className="email-form">
              <div className="row align-center">
                <div className="w-70">
                  <input type="text" placeholder="Enter your email"/>
                </div>
                <div className="w-30">
                  <div className="email-form-btn">
                    <button type="submit">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="row">
              <Single_footer
                content={"Customer Care"}
                menu1={"Help center"}
                menu2={"How to buy"}
                menu3={"Gropu Import"}
                menu4={"Return & Refunds"}
                menu5={"ImpoNexpoShop"}
                menu6={"Contact Us"}
                menu7={"Purchase Protection"}
                menu8={"Others"}
              />

              <Single_footer
                content={"ImpoNexpo"}
                menu1={"About Us"}
                menu2={"Digital Payments"}
                menu3={"ImpoNexpo Care"}
                menu4={"ImpoNexpo Blog"}
                menu5={"Terms & Conditions"}
                menu6={"Privacy Policy"}
                menu7={"Online Shopping App"}
                menu8={"Online Grocery Shopping"}
              />

              <Single_footer
                content={"Categories"}
                menu1={"Sports"}
                menu2={"Garden Equipments"}
                menu3={"Home Products"}
                menu4={"Car Showrooms"}
                menu5={"Garden things"}
                menu6={"Kitchen Accessories"}
                menu7={"Home Products"}
                menu8={"Car Showrooms"}
              />

              <Single_footer
                content={"Services"}
                menu1={"Graphics Design"}
                menu2={"Digital Marketing"}
                menu3={"Writing & Translation"}
                menu4={"Video & Animation"}
                menu5={"Music & Audio"}
                menu6={"Programming & Tech"}
                menu7={"Business"}
                menu8={"Data"}
              />
              <Single_footer
                content={"Make Money With Us"}
                menu1={"Sell on ImpoNexpo"}
                menu2={"Join Affiliate Marketing"}
                menu3={"Become a Service Seller"}
                menu4={"Become a Product Seller"}
                menu5={""}
                menu6={""}
                menu7={""}
                menu8={""}
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="w-3">
              <h4>Payment Method</h4>
              <div className="payment-images">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
              </div>
            </div>
            <div className="w-3">
              <h4>Follows Us</h4>
              <div className="social-icon">
                <Link to="/">
                  <i class="fa-brands fa-facebook"></i>
                </Link>
                <Link to="/">
                  <i class="fa-brands fa-skype"></i>
                </Link>
                <Link to="/">
                  <i class="fa-brands fa-pinterest"></i>
                </Link>
                <Link to="/">
                  <i class="fa-brands fa-google-play"></i>
                </Link>
                <Link to="/">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </div>
            <div className="w-3">
              <div className="d-flex align-center">
                <div className="qr-code">
                  <img src={qr} alt="" />
                </div>
                <div className="footer-logo">
                  <div className="footer-logo-img">
                    <img src={logo} alt="" />
                  </div>
                  <h5 style={{ color: "#00BAF2" }}>ImpoNexpo</h5>
                  <h5>Download App</h5>
                </div>
                <div className="footer-downloads">
                  <div className="down-store">
                    <div className="app-logo">
                      <img src={apple} alt="" />
                    </div>
                    <div>
                      <h6>Downloads on the</h6>
                      <h5>App Store</h5>
                    </div>
                  </div>
                  <div className="down-store">
                    <div className="app-logo">
                      <img src={apple} alt="" />
                    </div>
                    <div>
                      <h6>Get it on</h6>
                      <h5>Google play</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rights-reserved">
            <p>2023 ImpoNexpo.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
