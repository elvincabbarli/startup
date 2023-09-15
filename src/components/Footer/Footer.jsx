import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import twit from "../../assets/twit.svg";
import link from "../../assets/link.svg";
import insta from "../../assets/insta.svg";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner container">
        <div className="row">
          <div className="footer-1 col-lg-3 col-md-6 mx-auto mb-4">
            <img src={logo} alt="" />
            <div>
              <span>© 2020 Startupz</span> <br />
              <span> All rights reserved.</span>
            </div>
          </div>

          <div className="footer-2 col-lg-3 col-md-6 mx-auto mb-4">
            <div className="footer-second">
              <h2>Companies</h2>
              <li>
                <a href="/">Tolq</a>
              </li>
              <li>
                <a href="/">LegalSite</a>
              </li>
              <li>
                <a href="/"> Codekeeper </a>
              </li>
              <li>
                <a href="/">Feedback </a>
              </li>
              <li>
                <a href="/">Labs </a>
              </li>
            </div>
          </div>

          <div className="footer-3 col-lg-4 col-md-6 mx-auto mb-4">
            <div className="footer-second footer-middle">
              <h2>Contact</h2>
              <div>
                <p>World Trade Center The Hague</p>
                <p> Prinses Margrietplantsoen 33</p>
                <p>2595 AM The Hague</p>
                <p>The Netherlands</p>
              </div>
              <li>
                <a href="/">Send us an email</a>
              </li>
            </div>
          </div>

          <div className="footer-4 col-lg-2 col-md-6 mx-auto mb-4">
            <h2>Follow us</h2>
            <div className="social">
            <li>
              <a href="/">
                <img src={twit} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={link} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={insta} alt="" />
              </a>
            </li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
