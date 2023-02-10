import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackgroundImage from "../Assest/home.jpg";

const About = () => {
  return (
    // <div className="about-section-container">
    //   <div className="about-background-image-container">
    //     {/* <img src={AboutBackground} alt="" /> */}
    //   </div>

    //   <div className="about-section-image-container">
    //     <img src={AboutBackgroundImage} alt="" />
    //   </div>

    //   <div className="about-section-text-container">
    //     <p className="primary-subheading">About</p>
    //     <h1 className="primary-heading">
    //       Takafol is A Donations Application, So We Can Help Each Other
    //     </h1>
    //     <p className="primary-text">
    //       Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
    //       elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
    //     </p>
    //     <p className="primary-text">
    //       Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
    //       facilisis at fringilla quam.
    //     </p>
    //     <div className="about-buttons-container">
    //       <button className="secondary-button">Learn More</button>
    //       <button className="watch-video-button">
    //         <BsFillPlayCircleFill /> Watch Video
    //       </button>
    //     </div>
    //   </div>

    // </div>

    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Takafol Application,
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
