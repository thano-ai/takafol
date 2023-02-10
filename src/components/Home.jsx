import React from "react";
import Navbar from "./Navbar";
// import bannerBackground from "../Assest/";
import bannerImage from "../Assest/home.jpg";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Takafol Volunteer App
          </h1>
          <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <button className="secondary-button">
            Start Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
