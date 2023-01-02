import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { Link } from "react-router-dom";
import Resort from "../../components/resortIntroduction/Resort";
import Service from "../../components/service/Service";
import Offer from "../../components/offer/Offer";
import News from "../../components/news/News";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="backgroundImage">
        <div className="heading-and-text">
          <span className="heading"><p>Spend Quality Holidays With Us</p></span>
          <span className="desc"><p>We at Resort Paradise offers premium Hotels to all our beloved Customers and we are pleased to serve them our offereings .</p></span>
          <div className="reserveBtn">
            <Link to="/">
            <button>Reserve Now</button>
            </Link>
          </div>
        </div>
      </div>
      <Header/>
      <Resort/>
      <div className="homeContainer">
        <Featured/>
        <Service/>
        <News/>
        <Offer/>
        <div className="homeTitle">
          <p>  <span>Browse by </span>property type</p>
          <div className="underline"></div> 
        </div>
        <PropertyList/>
        <div className="homeTitle">
          <p>  <span>Homes </span>guest love</p>
          <div className="underline"></div> 
        </div> 
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
