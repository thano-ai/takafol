import React from "react";
import donate from "../Assest/heart.png" ;
import help from "../Assest/helping.png" ;
import health from "../Assest/protection.png" ;

const Work = () => {
  const workData = [
    {
      image: help,
      title: "Help",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et .",
    },
    {
      image: donate,
      title: "Donate",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: health,
      title: "Good Health",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>

      <div className="work-section-bottom">
        {workData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
