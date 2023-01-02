 import "./footer.css";
import { ImFire } from 'react-icons/im';
import { ImLocation } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerTop">
          <div className="footerTopContent">
            <div className="logoContent">
              <div className="logo">
                <span className="logoFire"> <ImFire/></span>
                <span className="logoName1">Resort</span>
                <span className="logoName2">Paradise </span>
              </div>
              <div className="address">
                <span className="logo"><ImLocation/> </span>
                <span className="content">54B, Tailstoi Town 5238 MT, La city, IA 522364</span>
              </div>
              <div className="phone">
                <span className="logo"><BsTelephoneFill/> </span>
                <span className="content">+ 547 5895 621</span>
              </div>
              <div className="btn">
                <button>Book Now</button>
              </div>
            </div>
            <div className="extraLink"> 
              <li>Extra Link</li>
              <div className="divider"></div>
              <li>- faq's</li>
              <li>- blog</li>
              <li>- reserve now</li>
            </div>
            <div className="ourService">
              <li>Our Services</li>
              <div className="divider"></div>
              <li>- Food & Drinks</li>
              <li>- Room</li>
              <li>- Amenities</li>
              <li>- Spa & Gym</li>
              <li>- Hill Tour</li>
            </div>
            <div className="socialLink">
              <li>Social Links</li>
              <div className="divider"></div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
        <div className="footerBottomContent">
          <span>Copyright © Resort Paradise 2022 | All Rights Reserved</span>
          <span>Designed by: Sayan Maity.</span>
        </div>
        </div>
      </div>
    </>
    
  );
};

export default Footer;
